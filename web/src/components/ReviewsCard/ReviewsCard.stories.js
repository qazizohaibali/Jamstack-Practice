import * as React from 'react'

import ReviewsCard from './ReviewsCard'

export default {
  title: 'Components/ReviewsCard',
  component: ReviewsCard,
}

const Template = (args) => <ReviewsCard {...args} />

export const Default = Template.bind({})
Default.args = {}
