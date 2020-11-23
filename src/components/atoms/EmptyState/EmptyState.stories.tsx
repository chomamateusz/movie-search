import React from 'react'

import { Meta, Story } from '@storybook/react/types-6-0'

import EmptyState, { EmptyStateProps } from './EmptyState'

export default {
  title: 'EmptyState',
  component: EmptyState,
} as Meta<EmptyStateProps>

const Template: Story<EmptyStateProps> = (args) => <EmptyState {...args} />

export const Default = Template.bind({})
Default.args = {
  ...Default.args,
  message: 'Default...',
  subMessage: '...is error!',
}

export const Empty = Template.bind({})
Empty.args = {
  ...Empty.args,
  variant: 'empty',
  message: 'Nothing was found!',
  subMessage: 'Maybe it is a misspell?',
}
