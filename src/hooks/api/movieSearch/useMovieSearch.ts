import useAxios from 'axios-hooks'

import { SearchResult } from '../../../types/api/movies/types'

export const useMovieSearch = () => {

  const result = useAxios<SearchResult>('/api', { manual: true })

  return result

}

export default useMovieSearch
