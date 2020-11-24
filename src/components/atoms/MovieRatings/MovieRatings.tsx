import React from 'react'

import { makeStyles, List, ListProps, ListItem, ListItemText } from '@material-ui/core'
import { Rating } from '@material-ui/lab'

import { MovieRating } from '../../../types/api/movie'
import calculateRating from './calculateRating'

export interface MovieRatingsProps extends ListProps {
  ratings: MovieRating[],
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

export const MovieRatings = (props: MovieRatingsProps) => {
  const classes = useStyles(props)
  const { ratings, ...otherProps } = props

  return (
    <List
      classes={{ root: classes.list }}
      dense={true}
      {...otherProps}
    >
      {
        ratings
          .map(({ Source, Value }) => {
            const calculatedRating = calculateRating(Value)

            return (
              <ListItem
                key={Source}
                classes={{ root: classes.item }}
              >
                <ListItemText
                  classes={{ root: classes.text }}
                >
                  <ListItemText
                    primary={(
                      calculatedRating.valid ?
                        <Rating
                          size={'small'}
                          defaultValue={calculatedRating.rating as number / 20}
                          max={5}
                          precision={0.01}
                          readOnly={true}
                        />
                        :
                        null
                    )}
                    secondary={`${Source} | ${Value}`}
                  />
                </ListItemText>

              </ListItem>
            )
          })
      }
    </List>
  )
}

export default MovieRatings
