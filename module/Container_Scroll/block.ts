import { Block } from 'payload/types'

export const Container_Scroll_Block: Block = {
  slug: 'ContainerScroll',
  interfaceName: 'ContainerScrollTypes',
  // imageURL: '',
  labels: {
    singular: 'Container Scroll Block',
    plural: 'Container Scroll Blocks',
  },
  fields: [
    {
      name: 'hero_data',
      type: 'textarea',
      label: 'Hero Data',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Subtitle',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Hero Image',
      required: true,
    },
  ],
}
