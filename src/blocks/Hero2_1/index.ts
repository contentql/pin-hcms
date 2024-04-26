import { Block } from 'payload/types';

export const Hero2_1: Block = {
  slug: 'hero2_1',
  imageURL: '/Hero2_1.PNG',
  labels: {
    singular: 'Hero2_1 Block',
    plural: 'Hero2_1 Blocks',
  },
  fields: [
    {
      name: 'hero_image',
      label: 'Hero Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Hero Image',
      },
    },
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: 'Description',
      type: 'text',
      required: true,
    },
    {
      name: 'button_text_one',
      label: 'Button Text 1',
      type: 'text',
      required: true,
    },
    {
      name: 'button_text_two',
      label: 'Button Text 2',
      type: 'text',
      required: true,
    },
  ],
};
