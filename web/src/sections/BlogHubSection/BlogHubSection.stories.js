import * as React from 'react'

import BlogHubSection from './BlogHubSection'

export default {
  title: 'Sections/BlogHubSection',
  component: BlogHubSection,
}

const Template = (args) => <BlogHubSection {...args} />

export const Default = Template.bind({})
Default.args = {}
