import React from 'react'

import { makeStyles } from '@material-ui/core'

import SearchItem from '../../atoms/SearchItem'
import EmptyState from '../../atoms/EmptyState'
import ButtonLoading from '../../atoms/ButtonLoading'
import SearchList from '../../molecules/SearchList'
import SearchListSkeleton from '../../molecules/SearchListSkeleton'

import { SearchResultItems, SearchResultItem } from '../../../types/api/movies'

export interface SearchResultsProps {
  isLoadingFirstTime?: boolean,
  isLoadingMore?: boolean,
  error?: Error,
  results?: SearchResultItems,
  onItemClicked?: (item: SearchResultItem) => void,
  totalResults?: number,
  loadMore?: () => void,
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
  },
}))

export const SearchResults = (props: SearchResultsProps) => {
  const classes = useStyles(props)
  const {
    isLoadingFirstTime = false,
    isLoadingMore = false,
    results,
    error,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onItemClicked = () => {},
    totalResults,
    loadMore,
    ...otherProps
  } = props

  return (
    <div
      className={classes.root}
      {...otherProps}
    >
      {
        isLoadingFirstTime ?
          <SearchListSkeleton
            itemCount={6}
          />
          :
          error ?
            <EmptyState
              message={'Error occurred!'}
              subMessage={error.message}
            />
            :
            !results ?
              <EmptyState
                message={'Error occurred!'}
                subMessage={'No results!'}
              />
              :
              <>
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
                {
                  (totalResults && loadMore && results.length < totalResults) ?
                    <ButtonLoading
                      onClick={loadMore}
                      fullWidth={true}
                      loading={isLoadingMore}
                    >
                      Load more (displaying {results.length} of {totalResults})
                    </ButtonLoading>
                    :
                    null
                }
              </>
      }
    </div>
  )
}

export default SearchResults
