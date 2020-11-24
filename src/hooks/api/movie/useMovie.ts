import useAxios from 'axios-hooks'

import { MovieItem, ErrorResponse } from '../../../types/api/movie/types'

export const useMovie = (id: string) => {

  const [{data, loading, error: errorFromResponse}, refetch] = useAxios<MovieItem | ErrorResponse>(`/api?id=${id}`)

  const error = (
    errorFromResponse ?
      errorFromResponse
      :
      (
        (data as ErrorResponse)?.Error ?
          (new Error((data as ErrorResponse).Error))
          :
          null
      )
  )

  return [{data, loading, error}, refetch] as const

}

export default useMovie
