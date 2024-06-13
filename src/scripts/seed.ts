import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'

import image1 from './demo-user-logo.png'

const seeding = async () => {
  const payload = await getPayloadHMR({ config: configPromise })

  console.log('Starting the seeding process...')

  payload.create({
    collection: 'media',
    filePath: process.cwd() + '/media/seed/demo-user-logo.png',
    data: image1,
  })
  console.log('Seeding process completed.')
}

export default seeding
