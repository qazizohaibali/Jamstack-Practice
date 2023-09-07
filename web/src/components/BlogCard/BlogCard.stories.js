import * as React from 'react'

import BlogCard from './BlogCard'

export default {
  title: 'Components/BlogCard',
  component: BlogCard,
}

const Template = (args) => <BlogCard {...args} />

export const Default = Template.bind({})
Default.args = {}
