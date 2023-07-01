import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '', //put project id
    dataset: 'production',
  },
})
