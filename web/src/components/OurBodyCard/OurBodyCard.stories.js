import * as React from 'react'

import OurBodyCard from './OurBodyCard'

export default {
  title: 'Components/OurBodyCard',
  component: OurBodyCard,
}

const Template = (args) => <OurBodyCard {...args} />

export const Default = Template.bind({})
Default.args = {}
