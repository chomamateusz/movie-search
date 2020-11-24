import React from 'react'

import { Meta, Story } from '@storybook/react/types-6-0'

import ErrorBoundary, { ErrorBoundaryProps } from './ErrorBoundary'

export default {
  title: 'ErrorBoundary',
  component: ErrorBoundary,
} as Meta<ErrorBoundaryProps>

const Template: Story<ErrorBoundaryProps> = (args) => <ErrorBoundary {...args} />

const ErrorComponent = () => { throw new Error() }
const NoErrorComponent = () => <>This text should be shown</>

export const ErrorCaught = Template.bind({})
ErrorCaught.args = {
  ...ErrorCaught.args,
  message: 'Error message',
  children: <ErrorComponent />,
}

export const NoError = Template.bind({})
NoError.args = {
  ...NoError.args,
  children: <NoErrorComponent />,
}
