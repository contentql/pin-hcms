import type { CollectionConfig } from 'payload/types'

const fs = require('fs')
const unzipper = require('unzipper')

const relativePathForStoring = './src/payload/test'

export const Blocks: CollectionConfig = {
  slug: 'blocks',
  access: {
    read: () => true,
  },

  upload: {
    staticDir: relativePathForStoring,
    focalPoint: false,
    crop: false,
  },
  hooks: {
    afterChange: [
      ({ doc, operation }) => {
        if (operation === 'create') {
          // Path to the zip file
          const zipFilePath = `${relativePathForStoring}/${doc.filename}`

          // Path to the destination directory
          const outputDir = relativePathForStoring

          // Create a read stream for the zip file
          // This is an async function
          fs.createReadStream(zipFilePath)
            .pipe(unzipper.Extract({ path: outputDir }))
            .on('close', () => {
              console.log('Unzip operation complete.')
            })
            .on('error', (err: any) => {
              console.error('Error during unzip:', err)
            })
        }
      },
    ],
  },
  fields: [
    {
      name: 'alt',
      label: 'Alt Text',
      type: 'text',
    },
  ],
}
