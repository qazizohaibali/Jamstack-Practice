import * as React from 'react'

import WhyUsCard from './WhyUsCard'

export default {
  title: 'Components/WhyUsCard',
  component: WhyUsCard,
}

const Template = (args) => <WhyUsCard {...args} />

export const Default = Template.bind({})
Default.args = {}
