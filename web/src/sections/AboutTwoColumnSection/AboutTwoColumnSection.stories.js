import * as React from 'react'

import AboutTwoColumnSection from './AboutTwoColumnSection'
import mocks from './mocks'

export default {
  title: 'Sections/AboutTwoColumnSection',
  component: AboutTwoColumnSection,
}

const Template = (args) => <AboutTwoColumnSection {...args} />

export const Default = Template.bind({})
Default.args = {...mocks}
