import * as React from 'react'

import ProfileFeaturedSection from './ProfileFeaturedSection'

export default {
  title: 'Sections/ProfileFeaturedSection',
  component: ProfileFeaturedSection,
}

const Template = (args) => <ProfileFeaturedSection {...args} />

export const Default = Template.bind({})
Default.args = {}
