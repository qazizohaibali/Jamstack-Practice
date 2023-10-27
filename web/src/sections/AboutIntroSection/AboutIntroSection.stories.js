import * as React from 'react'
import mocks from './mocks'

import AboutIntroSection from './AboutIntroSection'

export default {
  title: 'Sections/AboutIntroSection',
  component: AboutIntroSection,
}

const Template = (args) => <AboutIntroSection {...args} />

export const Default = Template.bind({})
Default.args = {...mocks}
