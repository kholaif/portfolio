import { defineType, defineField, defineArrayMember } from 'sanity'

export const portfolioItem = defineType({
  name: 'portfolioItem',
  title: 'Portfolio Item',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The display name for this piece of work.',
      validation: (r) => r.required().min(2).max(80),
    }),
    defineField({
      name: 'clientOrClub',
      title: 'Client / Club',
      type: 'string',
      description: 'e.g. "Rutgers APSA", "Ember Coffee Co."',
    }),
    defineField({
      name: 'mediaType',
      title: 'Media Type',
      type: 'string',
      options: {
        list: [
          { title: 'Short-form / Reel', value: 'Short-form/Reel' },
          { title: 'Long-form', value: 'Long-form' },
          { title: 'Animation', value: 'Animation' },
        ],
        layout: 'radio',
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url',
      description: 'YouTube (youtu.be/… or youtube.com/…), Vimeo, or Instagram Reel/post link. YouTube embeds inline; Instagram opens in a new tab (upload a thumbnail for best results).',
      validation: (r) =>
        r.uri({ scheme: ['http', 'https'] }),
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      description: 'Fallback poster image shown before the video loads. Use a 9:16 crop for reels.',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Describe the image for screen readers and SEO.',
        }),
      ],
    }),
    defineField({
      name: 'instagramUrl',
      title: 'Instagram Link (optional)',
      type: 'url',
      description: 'If this video is also on Instagram, paste the Reel/post link here. A small Instagram icon will appear on the card.',
      validation: (r) =>
        r.uri({ scheme: ['http', 'https'] }),
    }),
    defineField({
      name: 'tiktokUrl',
      title: 'TikTok Link (optional)',
      type: 'url',
      description: 'If this video is also on TikTok, paste the link here. A small TikTok icon will appear on the card.',
      validation: (r) =>
        r.uri({ scheme: ['http', 'https'] }),
    }),
    defineField({
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number',
      description: 'Lower numbers appear first. Drag-and-drop ordering can be configured in the desk structure.',
      initialValue: 0,
      validation: (r) => r.required().integer().min(0),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
      description: 'e.g. "Promo", "Event", "2D Animation"',
      options: { layout: 'tags' },
    }),
  ],
  orderings: [
    {
      title: 'Sort Order (default)',
      name: 'sortOrderAsc',
      by: [{ field: 'sortOrder', direction: 'asc' }],
    },
    {
      title: 'Title A–Z',
      name: 'titleAsc',
      by: [{ field: 'title', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'clientOrClub',
      media: 'thumbnail',
    },
  },
})
