import type { GeneratedTypes, Payload } from 'payload'

type SeedingCollections = {
  [K in keyof GeneratedTypes['collections']]: {
    collectionSlug: K
    seedData: Omit<
      GeneratedTypes['collections'][K],
      'id' | 'updatedAt' | 'createdAt'
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

  // Generate an array of promises for seeding each collection
  const seedingPromises = seedingCollections.map(async seedingCollection => {
    const { collectionSlug, seedData } = seedingCollection

    const collectionCount = await payload.count({
      collection: collectionSlug,
    })

    if (!collectionCount.totalDocs) {
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
    } else {
      console.log(
        `Collection ${collectionSlug} already contains documents, skipping seeding.`,
      )
    }
  })

  // Execute seeding for all collections concurrently
  const seedingResults = await Promise.allSettled(seedingPromises)

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
