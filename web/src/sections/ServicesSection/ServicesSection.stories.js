import * as React from 'react'

import ServicesSection from './ServicesSection'

import mocks from './mocks'

export default {
  title: 'Sections/ServicesSection',
  component: ServicesSection,
}

const Template = (args) => <ServicesSection {...args} />

export const Default = Template.bind({})
Default.args = {...mocks}
