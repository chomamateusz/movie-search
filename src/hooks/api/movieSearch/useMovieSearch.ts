import useAxios from 'axios-hooks'

import { SearchResult } from './types'

export const useMovieSearch = () => {

  const result = useAxios<SearchResult>('/api', { manual: true })

  return result

}

export default useMovieSearch
