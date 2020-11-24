import React from 'react'

import { Meta, Story } from '@storybook/react/types-6-0'

import ButtonLoading, { ButtonLoadingProps } from './ButtonLoading'

export default {
  title: 'ButtonLoading',
  component: ButtonLoading,
} as Meta<ButtonLoadingProps>

const Template: Story<ButtonLoadingProps> = (args) => <ButtonLoading {...args} />

export const Default = Template.bind({})
Default.args = {
  ...Default.args,
  children: 'Click me',
}


export const Loading = Template.bind({})
Loading.args = {
  ...Loading.args,
  children: 'Click me',
  loading: true,
}

