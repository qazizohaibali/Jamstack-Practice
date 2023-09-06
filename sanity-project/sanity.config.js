import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { myStructure } from './deskStructure'
import BrandLogo from './src/Logo'

export default defineConfig({
  name: 'default',
  title: 'Sanity Project',

  projectId: 'nwxjjhim',
  dataset: 'production',
  studio: {
    components: {
      logo: BrandLogo,
    },
  },
  plugins: [
    deskTool({
      structure: myStructure,
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
