import React from 'react'

import { makeStyles } from '@material-ui/core'

import { SearchResultItems, SearchResultItem } from '../../../types/api/movies'
import SearchList from '../../molecules/SearchList'
import SearchListSkeleton from '../../molecules/SearchListSkeleton'
import SearchItem from '../../atoms/SearchItem'
import EmptyState from '../../atoms/EmptyState'

export interface SearchResultsProps {
  isLoading?: boolean,
  hasError?: boolean,
  errorMessage?: string,
  results?: SearchResultItems | null,
  onItemClicked?: (item: SearchResultItem) => void,
}

const useStyles = makeStyles((theme) => ({
  root: {},
}))

export const SearchResults = (props: SearchResultsProps) => {
  const classes = useStyles(props)
  const {
    isLoading = true,
    hasError = false,
    errorMessage = '',
    results = null,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onItemClicked = () => {},
    ...otherProps
  } = props

  const hasValidResults = results && Array.isArray(results) && results.length > 0

  return (
    <div
      className={classes.root}
      {...otherProps}
    >
      {
        hasError?
          <EmptyState
            message={'Error occurred!'}
            subMessage={errorMessage}
          />
          :
          isLoading ?
            <SearchListSkeleton
              itemCount={6}
            />
            :
            hasValidResults ?
              <SearchList
                // @ts-ignore results are checked in hasValidResults var so they can't be null here
                items={results}
                renderItem={(item) => {
                  return (
                    <SearchItem
                      key={item.imdbID}
                      title={item.Title}
                      year={item.Year}
                      type={item.Type}
                      posterSrc={item.Poster}
                      onClick={() => onItemClicked(item)}
                    />
                  )
                }}
              />
              :
              <EmptyState
                variant={'empty'}
                message={'Nothing was found!'}
                subMessage={'Maybe it\'s just a misspell?'}
              />
      }
    </div>
  )
}

export default SearchResults
