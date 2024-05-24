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

export const seed = async ({
  payload,
  seedingCollections,
}: {
  payload: Payload
  seedingCollections: SeedingCollections[]
}) => {
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
  }

  // Generate an array of promises for seeding each collection
  const seedingPromises = seedingCollections.map(seedCollection)

  // Execute seeding for all collections concurrently
  const seedingResults = await Promise.allSettled(seedingPromises)

  // Handle the results of the seeding process for each collection
  seedingResults.forEach((result, index) => {
    const { collectionSlug } = seedingCollections[index]
    if (result.status === 'fulfilled') {
      console.log(`Collection ${collectionSlug} processing completed.`)
    } else {
      console.error(
        `Error processing collection ${collectionSlug}:`,
        result.reason,
      )
    }
  })

  console.log('Seeding process completed.')
}
