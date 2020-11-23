import React from 'react'

import { makeStyles, List, ListProps } from '@material-ui/core'

import SearchItemSkeleton from '../../atoms/SearchItemSkeleton'

export interface SearchListSkeletonProps extends ListProps {
  itemCount: number,
}

const useStyles = makeStyles((theme) => ({
  root: {},
}))

export const SearchListSkeleton = (props: SearchListSkeletonProps) => {
  const classes = useStyles(props)
  const {
    itemCount = 3,
    ...otherProps
  } = props

  return (
    <List
      className={classes.root}
      {...otherProps}
    >
      {
        (new Array(itemCount)).fill(1).map((el, i) => {
          return (
            <SearchItemSkeleton
              key={i}
            />
          )
        })
      }
    </List>
  )
}

export default SearchListSkeleton
