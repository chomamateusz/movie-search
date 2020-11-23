import React from 'react'

import { useMovieSearch } from '../hooks/api/movieSearch/useMovieSearch'

export interface IndexProps {
  [key: string]: any,
}

export const IndexPage = (props: IndexProps) => {
  const [{ data, loading, error }, search] = useMovieSearch()

  return (
    <div>
      {JSON.stringify(data)}
    </div>
  )
}

export default IndexPage
