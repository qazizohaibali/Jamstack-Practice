import * as React from 'react'

import ProfileHubCard from './ProfileHubCard'

export default {
  title: 'Components/ProfileHubCard',
  component: ProfileHubCard,
}

const Template = (args) => <ProfileHubCard {...args} />

export const Default = Template.bind({})
Default.args = {}
