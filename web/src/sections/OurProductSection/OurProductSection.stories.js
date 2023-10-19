import * as React from 'react'
import mocks from './mocks'
import OurProductSection from './OurProductSection'

export default {
  title: 'Sections/OurProductSection',
  component: OurProductSection,
}

const Template = (args) => <OurProductSection {...args} />

export const Default = Template.bind({})
Default.args = {...mocks}
