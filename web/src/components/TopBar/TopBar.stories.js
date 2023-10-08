import * as React from 'react'

import TopBar from './TopBar'

export default {
  title: 'Components/TopBar',
  component: TopBar,
}

const Template = (args) => <TopBar {...args} />

export const Default = Template.bind({})
Default.args = {}
