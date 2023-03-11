import { CollectionConfig } from 'payload/types';

const Characters: CollectionConfig = {
  slug: 'characters',
  admin: {
    defaultColumns: ['name', 'author', 'image', 'game', 'bio', 'status'],
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
      name: 'bio',
      type: 'richText'
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
      defaultValue: 'draft',
      admin: {
        position: 'sidebar',
      }
    }
  ],
}

export default Characters;