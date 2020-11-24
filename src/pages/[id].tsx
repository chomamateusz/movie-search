import React from 'react'

import { useRouter } from 'next/router'

import GoBackButton from '../components/atoms/GoBackButton'
import MovieCard from '../components/molecules/MovieCard'
import MovieCardSkeleton from '../components/molecules/MovieCardSkeleton'
import MoviePageLayout from '../components/templates/MoviePageLayout'

import useMovie from '../hooks/api/movie'

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
          'error'
          :
          loading ?
            <MovieCardSkeleton />
            :
            data ?
              <div>
                <GoBackButton
                  fallbackPath={'/'}
                />
                <MovieCard
                  movie={data}
                />
              </div>
              :
              null
      }
    </MoviePageLayout>
  )
}

export default MoviePage
