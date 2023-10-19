import * as React from 'react'

import OurProjectsSection from './OurProjectsSection'

export default {
  title: 'Sections/OurProjectsSection',
  component: OurProjectsSection,
}

const Template = (args) => <OurProjectsSection {...args} />

export const Default = Template.bind({})
Default.args = {}
