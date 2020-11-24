import React from 'react'

import { AxiosError, AxiosRequestConfig } from 'axios'
import useAxios, { RefetchOptions } from 'axios-hooks'

import { SearchResult, ErrorResponse } from '../../../types/api/movies/types'

export const useMovieSearch = () => {

  const [{data: dataFromResponse, loading, error: errorFromResponse}, refetch] = useAxios<SearchResult | ErrorResponse>('/api', { manual: true })
  const [data, setData] = React.useState<SearchResult | ErrorResponse | null | undefined>(dataFromResponse)
  React.useEffect(() => {
    setData(dataFromResponse)
  }, [dataFromResponse])
  const [error, setError] = React.useState<AxiosError<any> | Error | null | undefined>(errorFromResponse)
  React.useEffect(() => {
    const newError = (
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
    setError(newError)
  }, [data, errorFromResponse])

  // axios-hooks do not have pos
  const clear =  React.useCallback(() => {
    setData(null)
    setError(null)
  }, [])
  // this function seems to be regenerating every render so memoization was needed
  const refetchMemoized = React.useCallback((config?: AxiosRequestConfig | undefined, options?: RefetchOptions | undefined) => {
    clear()
    refetch(config, options)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [{data, loading, error}, refetchMemoized, clear] as const

}

export default useMovieSearch
