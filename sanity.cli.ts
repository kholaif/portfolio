import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'suycsnce',
    dataset: 'production',
  },
  studioHost: 'ko-media',
})
