import React from 'react'

import EmptyState from '../EmptyState'

export interface ErrorBoundaryProps {
  children: React.ReactNode,
  message?: string,
  subMessage?: string,
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, { hasError: boolean }> {
  public state = { hasError: false }

  public static getDerivedStateFromError(error: Error) {
    return { hasError: true }
  }

  public render() {
    if (this.state.hasError) {
      return (
        <EmptyState
          variant={'error'}
          message={this.props.message}
          subMessage={this.props.subMessage}
        />
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
