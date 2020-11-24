import React from 'react'

import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'

import { useDebounce, useUnmount, useLocalStorage } from 'react-use'

import SearchField from '../components/molecules/SearchField'
import SearchResults from '../components/organisms/SearchResults'
import SearchLayout from '../components/templates/SearchLayout'

import { useMovieSearch } from '../hooks/api/movieSearch/useMovieSearch'
import { useQsParams } from '../hooks/app/useQsParams'

import { SearchResultItem, SearchResultItems, SearchResult } from '../types/api/movies'

const BrowserOnlySearchHistory = dynamic(
  () => import('../components/organisms/SearchHistory'),
  { ssr: false },
)

export interface IndexProps {
  [key: string]: any,
}

export const IndexPage = (props: IndexProps) => {
  const router = useRouter()

  // LOAD SEARCH RESULTS
  const [{ data, loading, error }, movieSearch, clear] = useMovieSearch()

  // GET AND SET TITLE IN QS
  const [params, setParams] = useQsParams({ search: '' }, '/')
  const setTitle = React.useCallback((newTitle = '') => {
    clear()
    setParams({ search: newTitle })
  }, [setParams, clear])
  const title = params.search

  // DEBOUNCE TITLE CHANGE
  const [, cancel] = useDebounce(
    () => title && movieSearch({ params: { title } }),
    500,
    [title],
  )
  useUnmount(cancel)

  // GET AND SET PICKED RESULTS IN LOCALSTORAGE
  const [history, setHistory] = useLocalStorage<SearchResultItems>('movie-search__picked-results-history', [])
  const goToMovie = React.useCallback(({ imdbID }: SearchResultItem) => {
    router.push('/[id]', `/${imdbID}`)
  }, [router])
  const pickResult = React.useCallback((pickedResult: SearchResultItem) => {
    const newHistory = history && history.concat(pickedResult)
    if(newHistory) setHistory(newHistory)
    goToMovie(pickedResult)
  }, [goToMovie, history, setHistory])

  // PRELOAD MOVIE ROUTE
  React.useEffect(() => {
    router.prefetch('/[id]')
  })

  const results = (data as SearchResult)?.Search
  const isLoading = loading || (!error && !results && title !== '')

  return (
    <SearchLayout
      searchBarContent={
        <SearchField
          value={title}
          onClearClick={() => setTitle('')}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)}
        />
      }
      searchResultsContent={
        title === '' ?
          <BrowserOnlySearchHistory
            history={history}
            onItemClicked={goToMovie}
          />
          :
          <SearchResults
            error={error}
            results={results}
            isLoading={isLoading}
            onItemClicked={pickResult}
          />
      }
    />
  )
}

export default IndexPage
