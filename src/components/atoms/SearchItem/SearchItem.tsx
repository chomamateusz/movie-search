import React from 'react'

import { CircularProgress, ListItem, ListItemProps, ListItemAvatar, Avatar, ListItemText } from '@material-ui/core'
import { Theaters } from '@material-ui/icons'
import Image from 'material-ui-image'

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

  const hasValidPosterSrc = posterSrc && posterSrc !== 'N/A'

  return (
    <ListItem
      // @ts-ignore seems to be en error - list item gets props defined in ListItemProps type
      // https://github.com/mui-org/material-ui/issues/14971
      button={true}
      component={'li'}
      {...otherProps}
    >
      <ListItemAvatar>
        <Avatar
          variant={'rounded'}
        >
          {
            hasValidPosterSrc ?
              <Image
                loading={<CircularProgress size={20} />}
                style={{ width: '40px', height: '40px' }}
                src={posterSrc}
              />
              :
              <Theaters />
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
