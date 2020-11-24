import useAxios from 'axios-hooks'

import { SearchResult } from '../../../types/api/movies/types'

export const useMovie = (id: string) => {

  const result = useAxios<SearchResult>(`/api?id=${id}`)

  return result

}

export default useMovie
