import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'suycsnce',
    dataset: 'production',
  },
  // Points the Sanity CLI to the embedded Studio config inside the Next.js app.
  studioHost: 'portfolio',
})
