import React from 'react'

import { ListItem, ListItemProps, ListItemAvatar, Avatar, ListItemText } from '@material-ui/core'
import { Theaters } from '@material-ui/icons'

export interface SearchItemProps extends ListItemProps {
  title?: string,
  type?: 'movie' | 'series' | 'episode',
  year?: string,
  posterSrc?: string,
}


export const SearchItem = (props: SearchItemProps) => {
  const {
    title = '',
    year = '',
    type = '',
    posterSrc = '',
    ...otherProps
  } = props

  return (
    // @ts-ignore seems to be en error - list item gets props defined in ListItemProps type
    <ListItem
      {...otherProps}
    >
      <ListItemAvatar>
        <Avatar
          src={posterSrc}
        >
          {
            posterSrc ? null : <Theaters />
          }
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primaryTypographyProps={{ noWrap: true }}
        secondaryTypographyProps={{ noWrap: true }}
        primary={title}
        secondary={`${year}${(year && type) ? ' | ' : ''}${type}`}
      />
    </ListItem>
  )
}

export default SearchItem
