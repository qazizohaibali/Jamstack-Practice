import * as React from 'react'

import Button from './Button'

const onClick = (e) => {
  e.preventDefault()
  alert('I have been clicked')
}

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      defaultValue: 'primary',
      options: [
        'primary',
        'secondary',
        'fill-white',
        'fill-transparent',
      ],
      control: { type: 'select' },
    },
    label: {
      defaultValue: 'Learn More',
      control: { type: 'text' },
    },
  },
}

const Template = (args) => <Button {...args} />

export const ButtonPrimary = Template.bind({})
ButtonPrimary.args = {
  variant: 'primary',
  label: 'Get A Quote',
  onClick,
}
export const ButtonSecondary = Template.bind({})
ButtonSecondary.args = {
  variant: 'secondary',
  label: 'Get A Quote',
  onClick,
}
export const fillWhite = Template.bind({})
fillWhite.args = {
  variant: 'fill-white',
  label: 'Get A Quote',
  onClick,
}
export const ButtonTextLinkDark = Template.bind({})
ButtonTextLinkDark.args = {
  variant: 'fill-transparent',
  label: 'Get A Quote',
  onClick,
}
