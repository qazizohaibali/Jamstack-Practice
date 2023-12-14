import * as React from 'react'

import ParallaxSection from './ParallaxSection'

export default {
  title: 'Sections/ParallaxSection',
  component: ParallaxSection,
}

const Template = (args) => <ParallaxSection {...args} />

export const Default = Template.bind({})
Default.args = {}
