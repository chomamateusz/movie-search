import React from 'react'

import { Meta, Story } from '@storybook/react/types-6-0'

import Loader from './Loader'

export default {
  title: 'Loader',
  component: Loader,
} as Meta

const Template: Story = (args: Record<string, any>) => <Loader {...args} />

export const Default = Template.bind({})
Default.args = {}
