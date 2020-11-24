import React from 'react'

import { makeStyles } from '@material-ui/core'

import { SearchResultItems, SearchResultItem } from '../../../types/api/movies'
import SearchList from '../../molecules/SearchList'
import SearchListSkeleton from '../../molecules/SearchListSkeleton'
import SearchItem from '../../atoms/SearchItem'
import EmptyState from '../../atoms/EmptyState'

export interface SearchResultsProps {
  isLoading?: boolean,
  error?: Error,
  results?: SearchResultItems,
  onItemClicked?: (item: SearchResultItem) => void,
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
  },
}))

export const SearchResults = (props: SearchResultsProps) => {
  const classes = useStyles(props)
  const {
    isLoading = true,
    results = [],
    error,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onItemClicked = () => {},
    ...otherProps
  } = props

  return (
    <div
      className={classes.root}
      {...otherProps}
    >
      {
        error ?
          <EmptyState
            message={'Error occurred!'}
            subMessage={error.message}
          />
          :
          isLoading ?
            <SearchListSkeleton
              itemCount={6}
            />
            :
            <SearchList
              // @ts-ignore results are checked in hasResults var so they can't be null here
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
      }
    </div>
  )
}

export default SearchResults
