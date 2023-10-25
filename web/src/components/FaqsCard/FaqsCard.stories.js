import * as React from 'react'

import FaqsCard from './FaqsCard'

export default {
  title: 'Components/FaqsCard',
  component: FaqsCard,
}

const Template = (args) => <FaqsCard {...args} />

export const Default = Template.bind({})
Default.args = {}
