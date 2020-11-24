import React from 'react'

import { makeStyles, List, ListProps, ListItem, ListItemText, Typography } from '@material-ui/core'

import { MovieItem } from '../../../types/api/movie'

type MovieDetails = (keyof MovieItem)[]
export interface MovieDetailsListProps extends ListProps {
  data: Partial<MovieItem>,
  details?: MovieDetails,
}

const useStyles = makeStyles((theme) => ({
  list: {
    paddingTop: 0,
  },
  item: {
    padding: '0 16px 0 0',
  },
  text: {
    margin: 0,
  },
}))

export const MovieDetailsList = (props: MovieDetailsListProps) => {
  const classes = useStyles(props)
  const {
    data,
    details: detailsFromProps,
    ...otherProps
  } = props

  // this can be easy extended to receive not only an order of keys
  // but also labels for them or translations
  const details = detailsFromProps || Object.keys(data) as MovieDetails

  return (
    <List
      classes={{ root: classes.list }}
      dense={true}
      {...otherProps}
    >
      {
        details
          // filter out non string values as rating table
          .filter((key) => typeof data[key] === 'string' )
          .map((key) => {
            return (
              <ListItem
                key={key}
                classes={{ root: classes.item }}
              >
                <ListItemText
                  classes={{ root: classes.text }}
                >
                  <ListItemText
                    secondary={(
                      <>
                        <Typography
                          noWrap={true}
                          color={'textPrimary'}
                          variant={'caption'}
                          component={'span'}
                        >
                          {key}{': '}
                        </Typography>
                        <Typography
                          noWrap={true}
                          color={'textSecondary'}
                          variant={'caption'}
                          component={'span'}
                        >
                          {data[key]}
                        </Typography>
                      </>
                    )}
                  />
                </ListItemText>

              </ListItem>
            )
          })
      }
    </List>
  )
}

export default MovieDetailsList
