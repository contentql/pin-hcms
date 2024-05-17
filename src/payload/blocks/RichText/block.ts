import type { Block } from 'payload/types'

const RichText_Block: Block = {
  slug: 'RichText',
  interfaceName: 'RichTextType',
  fields: [
    {
      name: 'content',
      type: 'richText',
    },
  ],
}

export default RichText_Block
