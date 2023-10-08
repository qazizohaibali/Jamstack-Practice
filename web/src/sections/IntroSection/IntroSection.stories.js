import * as React from 'react'
import mocks from './mocks'
import IntroSection from './IntroSection'

export default {
  title: 'Sections/IntroSection',
  component: IntroSection,
}

const Template = (args) => <IntroSection {...args} />

export const Default = Template.bind({})
Default.args = {...mocks}
