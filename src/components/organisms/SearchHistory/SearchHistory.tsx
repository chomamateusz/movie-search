import React from 'react'

import { makeStyles, Typography } from '@material-ui/core'
import { History } from '@material-ui/icons'

import { SearchResultItems } from '../../../types/api/movies'
import SearchResults, { SearchResultsProps } from '../SearchResults'

export interface SearchHistoryProps {
  history?: SearchResultItems,
  onItemClicked?: SearchResultsProps['onItemClicked'],
}

const useStyles = makeStyles((theme) => ({
  root: {},
  header: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(2),
  },
  icon: {
    marginRight: theme.spacing(1),
  },
}))

export const SearchHistory = (props: SearchHistoryProps) => {
  const classes = useStyles(props)
  const {
    history = [],
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onItemClicked = () => {},
    ...otherProps
  } = props

  const isEmpty = history.length === 0

  return (
    <div
      className={classes.root}
      {...otherProps}
    >
      <Typography
        className={classes.header}
        variant={'button'}
        color={'textSecondary'}
      >
        <History
          className={classes.icon}
        />
        Search history {isEmpty ? '(EMPTY)' : ''}
      </Typography>
      {
        !isEmpty ?
          <SearchResults
            isLoading={false}
            hasError={false}
            results={history}
            onItemClicked={onItemClicked}
          />
          :
          null
      }
    </div>
  )
}

export default SearchHistory
