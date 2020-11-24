import React from 'react'

import EmptyState from '../components/atoms/EmptyState'
import MoviePageLayout from '../components/templates/MoviePageLayout'

const NotFoundPage = () => {
  return (
    <MoviePageLayout>
      <EmptyState
        message={'404'}
        subMessage={'Page not found!'}
      />
    </MoviePageLayout>
  )
}

export default NotFoundPage
