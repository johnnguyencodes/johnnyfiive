import {defineField} from 'sanity'

export default defineField({
  name: 'hero.blog',
  title: 'Blog hero',
  type: 'object',
  fields: [
    // Title
    defineField({
      name: 'title',
      title: 'Title',
      type: 'text',
      rows: 3,
    }),
    // Content
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      validation: (Rule) => Rule.max(1),
      of: [
        {
          name: 'blogWithVariant',
          title: 'Product with variant',
          type: 'productWithVariant',
        },
        {
          name: 'imageWithProductHotspots',
          title: 'Image',
          type: 'imageWithProductHotspots',
        },
      ],
    }),
  ],
})
