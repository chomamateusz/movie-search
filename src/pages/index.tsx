import React from 'react'

import { useRouter } from 'next/router'

import { useDebounce, useUnmount, useLocalStorage } from 'react-use'

import SearchField from '../components/molecules/SearchField'
import SearchResults from '../components/organisms/SearchResults'
import SearchLayout from '../components/templates/SearchLayout'
import SearchHistory from '../components/organisms/SearchHistory'

import { useMovieSearch } from '../hooks/api/movieSearch/useMovieSearch'
import { useQsParams } from '../hooks/app/useQsParams'
import { SearchResultItem, SearchResultItems } from '../types/api/movies'

export interface IndexProps {
  [key: string]: any,
}

export const IndexPage = (props: IndexProps) => {
  const router = useRouter()

  // GET AND SET TITLE IN QS
  const [params, setParams] = useQsParams({ search: '' }, '/')
  const setTitle = React.useCallback((newTitle = '') => {
    setParams({ search: newTitle })
  }, [setParams])
  const title = params.search

  const [debouncedTitle, setDebouncedTitle] = React.useState<string>('')
  const [, cancel] = useDebounce(
    () => setDebouncedTitle(title || ''),
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

  // LOAD SEARCH RESULTS
  const [{ data, loading, error }, search] = useMovieSearch()
  React.useEffect(() => {
    search({ params: { title: debouncedTitle } })
  }, [search, debouncedTitle])

  // PRELOAD MOVIE ROUTE
  React.useEffect(() => {
    router.prefetch('/[id]')
  })

  return (
    <SearchLayout
      searchBarContent={
        <SearchField
          value={title}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)}
        />
      }
      searchResultsContent={
        debouncedTitle ?
          <SearchResults
            isLoading={loading}
            hasError={Boolean(error)}
            errorMessage={error?.message || ''}
            results={data?.Search}
            onItemClicked={pickResult}
          />
          :
          <SearchHistory
            history={history}
            onItemClicked={goToMovie}
          />
      }
    />
  )
}

export default IndexPage
