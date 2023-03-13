import { CollectionConfig } from 'payload/types';

const Games: CollectionConfig = {
  slug: 'games',
  admin: {
    defaultColumns: ['title', 'boxart', 'releaseDate', 'description'],
    useAsTitle: 'title',
  },
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'boxart',
      type: 'text',
    },
    {
      name: 'releaseDate',
      type: 'date',
    },
    {
      name: 'description',
      type: 'richText',
    },
  ],
  timestamps: false,
}

export default Games;