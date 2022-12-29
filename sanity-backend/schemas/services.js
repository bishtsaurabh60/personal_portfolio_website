export default {
  name: 'services',
  type: 'document',
  title: 'Services',
  fields: [
    {
      name: 'service',
      type: 'string',
      title: 'Service',
    },
    {
      name: 'details',
      type: 'string',
      title: 'Details',
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
