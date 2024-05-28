import type { GeneratedTypes, Payload } from 'payload'

type SeedingCollections = {
  [K in keyof GeneratedTypes['collections']]: {
    collectionSlug: K
    seedData: Omit<
      GeneratedTypes['collections'][K],
      'id' | 'sizes' | 'updatedAt' | 'createdAt'
    >[]
  }
}[keyof GeneratedTypes['collections']]

type SeedingGlobals = {
  [K in keyof GeneratedTypes['globals']]: {
    globalSlug: K
    seedData: Omit<
      GeneratedTypes['globals'][K],
      'id' | 'updatedAt' | 'createdAt'
    >
  }
}[keyof GeneratedTypes['globals']]

// Define the type that enforces either seedingCollections or seedingGlobals must be provided
type SeedParams =
  | {
      payload: Payload
      seedingCollections: SeedingCollections[]
      seedingGlobals?: never
    }
  | {
      payload: Payload
      seedingCollections?: never
      seedingGlobals: SeedingGlobals[]
    }
  | {
      payload: Payload
      seedingCollections: SeedingCollections[]
      seedingGlobals: SeedingGlobals[]
    }

export const seed = async ({
  payload,
  seedingCollections = [],
  seedingGlobals = [],
}: SeedParams) => {
  console.log('Starting the seeding process...')

  // Function to seed a single collection
  const seedCollection = async (seedingCollection: SeedingCollections) => {
    const { collectionSlug, seedData } = seedingCollection

    // Check if the collection already contains documents
    const collectionCount = await payload.count({
      collection: collectionSlug,
    })

    // If documents already exist, skip seeding for this collection
    if (collectionCount.totalDocs > 0) {
      console.log(
        `Collection ${collectionSlug} already contains documents, skipping seeding.`,
      )
      return
    }

    console.log(`Seeding collection: ${collectionSlug}`)

    // Generate an array of promises for seeding each document in the collection
    const createPromises = seedData.map(data =>
      payload.create({
        collection: collectionSlug,
        data,
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

    return { collectionSlug, results: createResults }
  }

  // Function to seed a single global
  const seedGlobal = async (seedingGlobal: SeedingGlobals) => {
    const { globalSlug, seedData } = seedingGlobal

    // Check if the global already contains data
    const globalData = await payload.findGlobal({
      slug: globalSlug,
    })

    // If data already exists, skip seeding for this global
    if (Boolean(globalData?.id)) {
      console.log(
        `Global ${globalSlug} already contains data, skipping seeding.`,
      )
      return
    }

    console.log(`Seeding global: ${globalSlug}`)

    // Create a promise for seeding the global
    const createPromise = payload.updateGlobal({
      slug: globalSlug,
      // TODO: This type issue has to resolved
      data: seedData as any,
    })

    // Execute the seeding promise
    const createResult = await createPromise

    // Handle the result of the seeding process
    console.log(
      `Global ${globalSlug} seeding ${createResult ? 'completed' : 'failed'}.`,
    )

    return { globalSlug, results: createResult }
  }

  // Generate an array of promises for seeding each collection
  const seedingCollectionPromises = seedingCollections.map(seedCollection)

  // Generate an array of promises for seeding each global
  const seedingGlobalPromises = seedingGlobals.map(seedGlobal)

  // Execute seeding for all collections and globals concurrently
  const seedingPromises = [
    ...seedingCollectionPromises,
    ...seedingGlobalPromises,
  ]

  const seedingResults = await Promise.allSettled(seedingPromises)

  // Handle the results of the seeding process for each collection/global
  seedingResults.forEach((result, index) => {
    if (index < seedingCollections.length) {
      const { collectionSlug } = seedingCollections[index]
      if (result.status === 'fulfilled') {
        console.log(`Collection ${collectionSlug} processing completed.`)
      } else {
        console.error(
          `Error processing collection ${collectionSlug}:`,
          result.reason,
        )
      }
    } else {
      const globalIndex = index - seedingCollections.length
      const { globalSlug } = seedingGlobals[globalIndex]
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
