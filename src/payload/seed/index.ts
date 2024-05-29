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
    }
  | {
      payload: Payload
      collectionsToSeed?: never
      globalsToSeed: GlobalToSeed[]
    }
  | {
      payload: Payload
      collectionsToSeed: CollectionToSeed[]
      globalsToSeed: GlobalToSeed[]
    }

export const seed = async ({
  payload,
  collectionsToSeed = [],
  globalsToSeed = [],
}: SeedParams) => {
  console.log('Starting the seeding process...')

  // Function to seed a single collection
  const seedCollection = async (collectionToSeed: CollectionToSeed) => {
    const { collectionSlug, seed } = collectionToSeed

    // Check if the collection already contains documents
    const collectionCount = await payload.count({
      collection: collectionSlug,
    })

    // If documents already exist, skip seeding for this collection
    if (collectionCount.totalDocs > 0) {
      console.log(
        `Collection ${collectionSlug} already contains documents, skipping seeding.`,
      )

      return {
        type: 'collections',
        slug: collectionSlug,
        result: {
          message: `Collection ${collectionSlug} already contains documents.`,
        },
      }
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

    // Handle the results of the seeding process
    createResults.forEach((result, index) => {
      if (result.status === 'fulfilled') {
        console.log(
          `Document ${index + 1} in collection ${collectionSlug} successfully seeded.`,
        )
      } else {
        console.error(
          `Error seeding document ${index + 1} in collection ${collectionSlug}:`,
          result.reason,
        )
      }
    })

    console.log(`Collection ${collectionSlug} seeding completed.`)

    return {
      type: 'collections',
      slug: collectionSlug,
      result: createResults,
    }
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

      return {
        type: 'globals',
        slug: globalSlug,
        result: {
          message: `Global ${globalSlug} already contains data.`,
        },
      }
    }

    console.log(`Seeding global: ${globalSlug}`)

    // Create a promise for seeding the global
    const createResult = await payload.updateGlobal({
      slug: globalSlug,
      data: data as any, // TODO: Resolve type issue
      ...options,
    })

    // Handle the result of the seeding process
    console.log(
      `Global ${globalSlug} seeding ${createResult ? 'completed' : 'failed'}.`,
    )

    return {
      type: 'globals',
      slug: globalSlug,
      result: createResult,
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

  console.log('Seeding process completed.')

  return seedingResults
}
