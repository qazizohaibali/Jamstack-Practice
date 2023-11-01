import * as React from 'react'

import FeaturedBlogCard from './FeaturedBlogCard'

export default {
  title: 'Components/FeaturedBlogCard',
  component: FeaturedBlogCard,
}

const Template = (args) => <FeaturedBlogCard {...args} />

export const Default = Template.bind({})
Default.args = {}
