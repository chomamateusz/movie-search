import React from 'react'

import { useRouter } from 'next/router'

import { useDebounce, useUnmount } from 'react-use'

import SearchField from '../components/molecules/SearchField'
import SearchResults from '../components/organisms/SearchResults'
import SearchLayout from '../components/templates/SearchLayout'

import { useMovieSearch } from '../hooks/api/movieSearch/useMovieSearch'
import { useQsParams } from '../hooks/app/useQsParams'

export interface IndexProps {
  [key: string]: any,
}

export const IndexPage = (props: IndexProps) => {
  const router = useRouter()

  const [params, setParams] = useQsParams({ search: '' }, '/')
  const setTitle = React.useCallback((newTitle = '') => {
    // @ts-ignore this function should inherit type from React.useState setter
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

  const [{ data, loading, error }, search] = useMovieSearch()
  React.useEffect(() => {
    search({ params: { title: debouncedTitle } })
  }, [search, debouncedTitle])

  React.useEffect(() => {
    router.prefetch('/[id]')
  })

  return (
    <SearchLayout
      searchBarContent={<SearchField
        value={title}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)}
      />}
      searchResultsContent={<SearchResults
        isLoading={loading}
        hasError={Boolean(error)}
        errorMessage={error?.message || ''}
        results={data?.Search}
        onItemClicked={({ imdbID }) => router.push('/[id]', `/${imdbID}`)}
        displayHistory={debouncedTitle === ''}
      />}
    />
  )
}

export default IndexPage
