import { Block } from 'payload/types';

export const Review_1: Block = {
  slug: 'review_1',
  imageURL: '/Review_1.png',
  labels: {
    singular: 'Review_1 Block',
    plural: 'Review_1 Blocks',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'subtitle',
      label: 'Subtitle',
      type: 'text',
      required: true,
    },
    {
      name: 'button_text',
      label: 'Button Text',
      type: 'text',
      required: true,
    },

    {
      name: 'card',
      label: 'Card',
      type: 'array',
      fields: [
        {
          name: 'card_title',
          label: 'Card Title',
          type: 'text',
          required: true,
        },
        {
          name: 'card_description',
          label: 'Card Description',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
};
