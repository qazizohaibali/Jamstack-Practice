import * as React from 'react'

import SocialMediaSectionCard from './SocialMediaSectionCard'

export default {
  title: 'Components/SocialMediaSectionCard',
  component: SocialMediaSectionCard,
}

const Template = (args) => <SocialMediaSectionCard {...args} />

export const Default = Template.bind({})
Default.args = {}
