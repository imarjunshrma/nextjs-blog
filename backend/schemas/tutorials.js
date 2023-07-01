export default {
  name: 'tutorials',
  type: 'document',
  title: 'Tutorials', //document
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'description',
      type: 'string',
      title: 'description',
    },
    {
      name: 'views',
      type: 'string',
      title: 'Views',
    },
    {
      name: 'comments',
      type: 'number',
      title: 'Comments',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
    },
  ],
}
