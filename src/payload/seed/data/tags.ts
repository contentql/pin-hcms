import { Tag } from 'payload-types'

export const Tags: Omit<Tag, 'id' | 'createdAt' | 'updatedAt'>[] = [
  {
    title: 'welcome',
    color: 'blue',
    description: 'This is a welcome tag',
    tagImage: '',
    _status: 'published',
  },

  {
    title: 'Management',
    color: 'purple',
    description: 'This is a Project Management tag',
    tagImage: '',
    _status: 'published',
  },
  {
    title: 'AI Insights',
    color: 'indigo',
    description: 'This is a AI Insights tag',
    tagImage: '',
    _status: 'published',
  },
  {
    title: 'Enterprise',
    color: 'green',
    description: 'This is a Enterprise tag',
    tagImage: '',
    _status: 'published',
  },
]
