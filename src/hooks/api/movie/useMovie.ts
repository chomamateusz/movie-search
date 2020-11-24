import useAxios from 'axios-hooks'

import { MovieItem } from '../../../types/api/movie/types'

export const useMovie = (id: string) => {

  const result = useAxios<MovieItem>(`/api?id=${id}`)

  return result

}

export default useMovie
