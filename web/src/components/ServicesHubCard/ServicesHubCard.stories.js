import * as React from 'react'

import ServicesHubCard from './ServicesHubCard'

export default {
  title: 'Components/ServicesHubCard',
  component: ServicesHubCard,
}

const Template = (args) => <ServicesHubCard {...args} />

export const Default = Template.bind({})
Default.args = {}
