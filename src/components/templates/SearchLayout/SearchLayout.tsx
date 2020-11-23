import React from 'react'

import { makeStyles, Paper, PaperProps } from '@material-ui/core'

export interface SearchLayoutProps {
  searchBarContent: React.ReactNode,
  searchResultsContent: React.ReactNode,
  rootContainerProps?: React.HTMLProps<HTMLDivElement>,
  searchResultsContainerProps?: React.HTMLProps<HTMLDivElement>,
  searchBarContainerProps?: PaperProps,
}

const hideScrollBar = {
  'scrollbar-width': 'none',
  '-ms-overflow-style': 'none',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'column',
  },
  searchBar: {
    width: '100%',
    padding: theme.spacing(2),
    borderRadius: '0 0 4px 4px',
    boxSizing: 'border-box',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1),
    },
  },
  searchResults: {
    width: '100%',
    height: '100%',
    overflowX: 'hidden',
    overflowY: 'scroll',
    ...hideScrollBar,
  },
}))

export const SearchLayout = (props: SearchLayoutProps) => {
  const classes = useStyles(props)
  const {
    searchBarContent,
    searchResultsContent,
    rootContainerProps = {},
    searchResultsContainerProps = {},
    searchBarContainerProps = {},
    ...otherProps
  } = props

  return (
    <div
      className={classes.root}
      {...otherProps}
      {...rootContainerProps}
    >
      <Paper
        classes={{root: classes.searchBar}}
        {...searchBarContainerProps}
      >
        {searchBarContent}
      </Paper>
      <div
        className={classes.searchResults}
        {...searchResultsContainerProps}
      >
        {searchResultsContent}
      </div>
    </div>
  )
}

export default SearchLayout
