import * as React from 'react'

import ServicesHeroSection from './ServicesHeroSection'

export default {
  title: 'Sections/ServicesHeroSection',
  component: ServicesHeroSection,
}

const Template = (args) => <ServicesHeroSection {...args} />

export const Default = Template.bind({})
Default.args = {}
