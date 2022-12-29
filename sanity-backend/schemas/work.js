export default {
  name: 'work',
  type: 'document',
  title: 'Work',
  fields: [
    {
      name: 'project',
      type: 'string',
      title: 'Project',
    },
    {
      name: 'technologies',
      type: 'string',
      title: 'Technologies',
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
    {
      name: 'gitLink',
      type: 'string',
      title: 'GitLink',
    },
    {
      name: 'live',
      type: 'string',
      title: 'Live',
    },
  ],
}
