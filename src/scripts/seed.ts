import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'

const seeding = async () => {
  const payload = await getPayloadHMR({ config: configPromise })

  console.log('Starting the seeding process...')

  payload.create({
    collection: 'media',
    filePath: process.cwd() + '/public/profile.jpg',
    data: {
      alt: 'test img',
    },
  })
  console.log('Seeding process completed.')
}

export default seeding
