import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import path from 'path'

const seeding = async () => {
  const payload = await getPayloadHMR({ config: configPromise })

  console.log('Starting the seeding process...')

  payload.create({
    collection: 'media',
    filePath: path.join(process.cwd(), '/public/images/profile.jpg'),
    data: {
      alt: 'test img',
    },
  })
  console.log('Seeding process completed.')
}

export default seeding
