import React from 'react'

import { Meta, Story } from '@storybook/react/types-6-0'

import FullScreenLoader from './FullScreenLoader'

export default {
  title: 'FullScreenLoader',
  component: FullScreenLoader,
} as Meta

const Template: Story = (args: Record<string, unknown>) => <FullScreenLoader {...args} />

export const Default = Template.bind({})
Default.args = {}
