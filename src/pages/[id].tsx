import { useRouter } from 'next/router'
import useMovie from '../hooks/api/movie'

const MoviePage = () => {
  const router = useRouter()
  const { id } = router.query

  const [{data}] = useMovie(id as string)

  return <p>{JSON.stringify(data)}  </p>
}

export default MoviePage
