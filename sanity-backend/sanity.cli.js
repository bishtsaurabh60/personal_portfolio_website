import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: import.meta.env.SANITY_STUDIO_PROJECT_ID, //<replace it with your product ID>
    dataset: 'production',
  },
})
