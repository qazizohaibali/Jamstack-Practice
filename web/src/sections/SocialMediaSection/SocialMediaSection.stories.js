import * as React from 'react'

import SocialMediaSection from './SocialMediaSection'

export default {
  title: 'Sections/SocialMediaSection',
  component: SocialMediaSection,
}

const Template = (args) => <SocialMediaSection {...args} />

export const Default = Template.bind({})
Default.args = {}
