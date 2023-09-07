import * as React from 'react'

import SoftwareCard from './SoftwareCard'

export default {
  title: 'Components/SoftwareCard',
  component: SoftwareCard,
}

const Template = (args) => <SoftwareCard {...args} />

export const Default = Template.bind({})
Default.args = {}
