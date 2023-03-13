import { CollectionConfig } from 'payload/types';

const Characters: CollectionConfig = {
  slug: 'characters',
  admin: {
    defaultColumns: ['name', 'author', 'image', 'firstGame', 'allGames', 'playableGames', 'bio', 'status'],
    useAsTitle: 'name',
  },
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
    },
    {
      name: 'image',
      type: 'text',
    },
    {
      name: 'game',
      type: 'relationship',
      relationTo: 'games'
    },
    {
      name: 'allGames',
      type: 'relationship',
      relationTo: 'games',
      hasMany: true,
    },
    {
      name: 'playableGames',
      type: 'relationship',
      relationTo: 'games',
      hasMany: true,
    },
    {
      name: 'bio',
      type: 'richText'
    },
    {
      name: 'pictures',
      type: 'text',
      hasMany: true,
    },
    {
      name: 'status',
      type: 'select',
      options: [
        {
          value: 'draft',
          label: 'Draft',
        },
        {
          value: 'published',
          label: 'Published',
        },
      ],
      defaultValue: 'published',
      admin: {
        position: 'sidebar',
      }
    }
  ],
}

export default Characters;