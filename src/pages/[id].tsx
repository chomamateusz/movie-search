import React from 'react'

import { useRouter } from 'next/router'

import EmptyState from '../components/atoms/EmptyState'
import GoBackButton from '../components/atoms/GoBackButton'
import MovieCard from '../components/molecules/MovieCard'
import MovieCardSkeleton from '../components/molecules/MovieCardSkeleton'
import MoviePageLayout from '../components/templates/MoviePageLayout'

import useMovie from '../hooks/api/movie'

import { MovieItem } from '../types/api/movie/types'

const MoviePage = () => {
  const router = useRouter()
  const { id } = router.query

  const [{data, loading, error}] = useMovie(id as string)

  React.useEffect(() => {
    router.prefetch('/')
  })

  return (
    <MoviePageLayout>
      {
        error ?
          <EmptyState
            message={'Error occurred!'}
            subMessage={error.message}
          />
          :
          loading ?
            <MovieCardSkeleton />
            :
            <div>
              <GoBackButton
                fallbackPath={'/'}
              />
              <MovieCard
                movie={data as MovieItem}
              />
            </div>
      }
    </MoviePageLayout>
  )
}

export default MoviePage
