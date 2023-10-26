import * as React from 'react'

import FeaturedTextSection from './FeaturedTextSection'

export default {
  title: 'Sections/FeaturedTextSection',
  component: FeaturedTextSection,
}

const Template = (args) => <FeaturedTextSection {...args} />

export const Default = Template.bind({})
Default.args = {}
