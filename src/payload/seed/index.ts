import type { GeneratedTypes, Payload, RequestContext } from 'payload'
import { PayloadRequestWithData } from 'payload/types'

export declare type MarkOptional<T, K extends keyof T> = Omit<T, K> &
  Partial<Pick<T, K>>

type CollectionCreateOptions = {
  context?: RequestContext
  depth?: number
  disableVerificationEmail?: boolean
  draft?: boolean
  fallbackLocale?: GeneratedTypes['locale']
  file?: {
    data: Buffer
    mimetype: string
    name: string
    size: number
  }
  filePath?: string
  locale?: GeneratedTypes['locale']
  overrideAccess?: boolean
  overwriteExistingFiles?: boolean
  req?: PayloadRequestWithData
  showHiddenFields?: boolean
  user?: Document
}

type GlobalUpdateOptions = {
  context?: RequestContext
  depth?: number
  draft?: boolean
  fallbackLocale?: GeneratedTypes['locale']
  locale?: GeneratedTypes['locale']
  overrideAccess?: boolean
  req?: PayloadRequestWithData
  showHiddenFields?: boolean
  user?: Document
}

// Define the type for seeding collections
type CollectionToSeed = {
  [K in keyof GeneratedTypes['collections']]: {
    collectionSlug: K
    seed: {
      data: Omit<
        GeneratedTypes['collections'][K],
        'id' | 'sizes' | 'updatedAt' | 'createdAt'
      >
      options?: CollectionCreateOptions
    }[]
  }
}[keyof GeneratedTypes['collections']]

// Define the type for seeding globals
type GlobalToSeed = {
  [K in keyof GeneratedTypes['globals']]: {
    globalSlug: K
    seed: {
      data: Omit<GeneratedTypes['globals'][K], 'id' | 'updatedAt' | 'createdAt'>
      options?: GlobalUpdateOptions
    }
  }
}[keyof GeneratedTypes['globals']]

// Define the type that enforces either collectionsToSeed or globalsToSeed must be provided
type SeedParams =
  | {
      payload: Payload
      collectionsToSeed: CollectionToSeed[]
      globalsToSeed?: never
      skipSeeding?: boolean
    }
  | {
      payload: Payload
      collectionsToSeed?: never
      globalsToSeed: GlobalToSeed[]
      skipSeeding?: boolean
    }
  | {
      payload: Payload
      collectionsToSeed: CollectionToSeed[]
      globalsToSeed: GlobalToSeed[]
      skipSeeding?: boolean
    }

export type SeedingResultsReturnData = {
  collectionsSeedingResult: {
    status: 'fulfilled' | 'rejected' | 'skipped'
    reason?: string
    collectionSlug: string
    results: any[]
  }[]
  globalsSeedingResult: {
    status: 'fulfilled' | 'rejected' | 'skipped'
    reason?: string
    globalSlug: string
    result: any
  }[]
}

export const seed = async ({
  payload,
  collectionsToSeed = [],
  globalsToSeed = [],
  skipSeeding = true,
}: SeedParams) => {
  const seedingResultsReturnData: SeedingResultsReturnData = {
    collectionsSeedingResult: [],
    globalsSeedingResult: [],
  }

  // Function to seed a single collection
  const seedCollection = async (collectionToSeed: CollectionToSeed) => {
    const { collectionSlug, seed } = collectionToSeed

    // Check if the collection already contains documents
    const collectionCount = await payload.count({
      collection: collectionSlug,
    })

    // If documents already exist, skip seeding for this collection
    if (collectionCount.totalDocs > 0 && skipSeeding) {
      console.log(
        `Collection ${collectionSlug} already contains documents, skipping seeding.`,
      )

      seedingResultsReturnData.collectionsSeedingResult.push({
        status: 'skipped',
        collectionSlug,
        reason: `Collection ${collectionSlug} already contains documents.`,
        results: [],
      })

      return
    }

    console.log(`Seeding collection: ${collectionSlug}`)

    // Create promises for seeding each document in the collection
    const createPromises = seed.map(({ data, options }) =>
      payload.create({
        collection: collectionSlug,
        data,
        ...options,
      }),
    )

    // Execute seeding for all documents in the collection concurrently
    const createResults = await Promise.allSettled(createPromises)

    // Determine the overall status based on the individual results
    const overallStatus = createResults.every(
      result => result.status === 'fulfilled',
    )
      ? 'fulfilled'
      : 'rejected'

    // Format the results of the seeding process
    const formattedResults = createResults.map((result, index) => {
      if (result.status === 'fulfilled') {
        console.log(
          `Document ${index + 1} in collection ${collectionSlug} successfully seeded.`,
        )
        return { status: 'fulfilled', data: result.value }
      } else {
        console.error(
          `Error seeding document ${index + 1} in collection ${collectionSlug}:`,
          result.reason,
        )
        return { status: 'rejected', reason: result.reason }
      }
    })

    console.log(`Collection ${collectionSlug} seeding completed.`)

    seedingResultsReturnData.collectionsSeedingResult.push({
      status: overallStatus,
      collectionSlug,
      results: formattedResults,
    })
  }

  // Function to seed a single global
  const seedGlobal = async (globalToSeed: GlobalToSeed) => {
    const { globalSlug, seed } = globalToSeed
    const { data, options } = seed

    // Check if the global already contains data
    const globalData = await payload.findGlobal({
      slug: globalSlug,
    })

    // If data already exists, skip seeding for this global
    if (Boolean(globalData?.id)) {
      console.log(
        `Global ${globalSlug} already contains data, skipping seeding.`,
      )

      seedingResultsReturnData.globalsSeedingResult.push({
        status: 'skipped',
        globalSlug,
        reason: `Global ${globalSlug} already contains data.`,
        result: {},
      })

      return
    }

    console.log(`Seeding global: ${globalSlug}`)

    try {
      // Create a promise for seeding the global
      const createResult = await payload.updateGlobal({
        slug: globalSlug,
        data: data as any, // TODO: Resolve type issue
        ...options,
      })

      console.log(`Global ${globalSlug} seeding completed.`)

      seedingResultsReturnData.globalsSeedingResult.push({
        status: 'fulfilled',
        globalSlug,
        result: createResult,
      })
    } catch (error) {
      console.error(`Error seeding global ${globalSlug}:`, error)

      seedingResultsReturnData.globalsSeedingResult.push({
        status: 'rejected',
        globalSlug,
        result: { error },
      })
    }
  }

  // Generate promises for seeding collections and globals
  const seedingCollectionPromises = collectionsToSeed.map(seedCollection)
  const seedingGlobalPromises = globalsToSeed.map(seedGlobal)
  const seedingPromises = [
    ...seedingCollectionPromises,
    ...seedingGlobalPromises,
  ]

  // Execute seeding for all collections and globals concurrently
  const seedingResults = await Promise.allSettled(seedingPromises)

  // Handle the results of the seeding process
  seedingResults.forEach((result, index) => {
    if (index < collectionsToSeed.length) {
      const { collectionSlug } = collectionsToSeed[index]
      if (result.status === 'fulfilled') {
        console.log(`Collection ${collectionSlug} processing completed.`)
      } else {
        console.error(
          `Error processing collection ${collectionSlug}:`,
          result.reason,
        )
      }
    } else {
      const globalIndex = index - collectionsToSeed.length
      const { globalSlug } = globalsToSeed[globalIndex]
      if (result.status === 'fulfilled') {
        console.log(`Global ${globalSlug} processing completed.`)
      } else {
        console.error(`Error processing global ${globalSlug}:`, result.reason)
      }
    }
  })

  return seedingResultsReturnData
}
