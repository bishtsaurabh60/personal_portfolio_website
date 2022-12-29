export default {
  name: 'profile',
  type: 'document',
  title: 'Profile',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
    },
  ],
}
