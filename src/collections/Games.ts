import { CollectionConfig } from 'payload/types';

const Games: CollectionConfig = {
  slug: 'games',
  admin: {
    defaultColumns: ['name', 'releaseDate', 'description'],
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
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