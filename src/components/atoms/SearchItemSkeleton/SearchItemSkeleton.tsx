import React from 'react'

import { ListItem, ListItemProps, ListItemAvatar, ListItemText } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'

export type SearchItemSkeletonProps = ListItemProps

export const SearchItemSkeleton = (props: SearchItemSkeletonProps) => {
  const { ...otherProps } = props

  return (
    // @ts-ignore seems to be en error - list item gets props defined in ListItemProps type
    // https://github.com/mui-org/material-ui/issues/14971
    <ListItem
      {...otherProps}
    >
      <ListItemAvatar>
        <Skeleton variant={'circle'} width={40} height={40} />
      </ListItemAvatar>
      <ListItemText
        primaryTypographyProps={{ noWrap: true }}
        secondaryTypographyProps={{ noWrap: true }}
        primary={<Skeleton variant={'text'} />}
        secondary={<Skeleton variant={'text'} />}
      />
    </ListItem>
  )
}

export default SearchItemSkeleton
