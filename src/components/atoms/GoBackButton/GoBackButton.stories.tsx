import React from 'react'

import { Meta, Story } from '@storybook/react/types-6-0'

import GoBackButton, { GoBackButtonProps } from './GoBackButton'

export default {
  title: 'GoBackButton',
  component: GoBackButton,
} as Meta<GoBackButtonProps>

const Template: Story<GoBackButtonProps> = (args) => <GoBackButton {...args} />

export const Default = Template.bind({})
Default.args = {

}
