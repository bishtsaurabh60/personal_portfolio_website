export default {
  name: 'about',
  type: 'document',
  title: 'About',
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
      name: 'aboutMe',
      type: 'string',
      title: 'AboutMe',
    },
    {
      name: 'resume',
      type: 'string',
      title: 'Resume',
    },
  ],
}
