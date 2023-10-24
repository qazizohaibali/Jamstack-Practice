import * as React from 'react'

import VideoModal from './VideoModal'

export default {
  title: 'Components/VideoModal',
  component: VideoModal,
}

const Template = (args) => <VideoModal {...args} />

export const Default = Template.bind({})
Default.args = {}
