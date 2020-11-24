import { SearchResult, ErrorResponse } from '../../../types/api/movies/types'

import { useClearableAxios } from '../useClearableAxios'

export const useMovieSearch = () => {

  const [{data, loading, error: errorFromResponse, response}, refetch, clear] = useClearableAxios<SearchResult | ErrorResponse>('/api', { manual: true })
  const error = (
    errorFromResponse ?
      errorFromResponse
      :
      (
        (data as ErrorResponse)?.Error ?
          (new Error((data as ErrorResponse).Error))
          :
          undefined
      )
  )

  return [{data, loading, error, response}, refetch, clear] as const

}

export default useMovieSearch
