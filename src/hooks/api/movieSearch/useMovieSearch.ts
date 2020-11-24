import React from 'react'

import { SearchResult, ErrorResponse } from '../../../types/api/movies/types'

import { useClearableAxios, AxiosRequestConfig, RefetchOptions } from '../useClearableAxios'

const PAGE_SIZE = 10

export const useMovieSearch = () => {

  const [storedData, setStoredData] = React.useState<SearchResult>()
  const [{data, loading, error: errorFromResponse, response}, load, clearData] = useClearableAxios<SearchResult | ErrorResponse>('/api', { manual: true })
  const error = React.useMemo(() => (
    errorFromResponse ?
      errorFromResponse
      :
      (
        (data as ErrorResponse)?.Error ?
          (new Error((data as ErrorResponse).Error))
          :
          undefined
      )
  ), [data, errorFromResponse])

  React.useEffect(() => {
    if(error) return
    if(loading) return
    if(!data) return
    if(!storedData) {
      setStoredData(data as SearchResult)
      return
    }
    setStoredData({
      ...storedData,
      Search: storedData.Search.concat((data as SearchResult).Search),
    })
  // we do not want to refresh on storeDataChange
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, data, error])

  const loadMore = React.useCallback((params: AxiosRequestConfig['params']) => {
    // can't load next page if there is no data
    if(!storedData || !Array.isArray(storedData?.Search)) return
    const totalResults = Number(storedData.totalResults)
    const totalPages =  Math.ceil(totalResults / PAGE_SIZE)
    const currentPage = Math.ceil(storedData.Search.length / PAGE_SIZE)
    // can't load more than all pages
    if(currentPage === totalPages) return
    load({ params: { ...params, page: currentPage + 2 } })
  }, [load, storedData])

  const clear = React.useCallback(() => {
    setStoredData(undefined)
    clearData()
  }, [clearData])
  const refetch = React.useCallback((config?: AxiosRequestConfig | undefined, options?: RefetchOptions | undefined) => {
    clear()
    load(config, options)
  }, [clear, load])

  return [{data: storedData, loading, error, response}, refetch, clear, loadMore] as const

}

export default useMovieSearch
