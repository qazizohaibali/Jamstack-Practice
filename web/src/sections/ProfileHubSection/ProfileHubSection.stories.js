import * as React from 'react'

import ProfileHubSection from './ProfileHubSection'

export default {
  title: 'Sections/ProfileHubSection',
  component: ProfileHubSection,
}

const Template = (args) => <ProfileHubSection {...args} />

export const Default = Template.bind({})
Default.args = {}
