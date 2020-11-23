import React from 'react'

import { useDebounce, useUnmount } from 'react-use'

import SearchField from '../components/molecules/SearchField'
import SearchResults from '../components/organisms/SearchResults'
import SearchLayout from '../components/templates/SearchLayout'

import { useMovieSearch } from '../hooks/api/movieSearch/useMovieSearch'

export interface IndexProps {
  [key: string]: any,
}

export const IndexPage = (props: IndexProps) => {
  const [title, setTitle] = React.useState<string>('')
  const [debouncedTitle, setDebouncedTitle] = React.useState<string>('')
  const [, cancel] = useDebounce(
    () => setDebouncedTitle(title),
    500,
    [title],
  )
  useUnmount(cancel)

  const [{ data, loading, error }, search] = useMovieSearch()
  React.useEffect(() => {
    search({ params: { title: debouncedTitle } })
  }, [search, debouncedTitle])

  return (
    <SearchLayout
      searchBarContent={<SearchField
        value={title}
        onChange={(event: React.ChangeEvent) => setTitle(event.target.value)}
      />}
      searchResultsContent={<SearchResults
        isLoading={loading}
        hasError={Boolean(error)}
        errorMessage={error?.message || ''}
        results={data?.Search}
        onItemClicked={console.log}
        displayHistory={debouncedTitle === ''}
      />}
    />
  )
}

export default IndexPage
