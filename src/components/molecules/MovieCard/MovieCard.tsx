import React from 'react'

import { makeStyles, CardProps, CardMedia, Typography  } from '@material-ui/core'

import MovieDetailsList from '../../atoms/MovieDetailsList'

import { MovieItem } from '../../../types/api/movie'

import MovieRatings from '../../atoms/MovieRatings'
import MovieCardLayout from '../../templates/MovieCardLayout'

export interface MovieCardProps extends CardProps {
  movie: MovieItem,
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    maxWidth: 960,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  media: {
    minWidth: 320,
    height: 400,
    backgroundSize: 'contain',
    backgroundColor: theme.palette.common.black,
  },
}))

export const MovieCard = (props: MovieCardProps) => {
  const classes = useStyles(props)
  const {
    movie,
    ...otherProps
  } = props

  const {
    Title: title = '',
    Plot: plot = '',
    Poster: posterSrc = '',
  } = movie

  // @TODO can be unified with SearchItem
  const hasValidPosterSrc = posterSrc && posterSrc !== 'N/A'

  return (
    <MovieCardLayout
      mediaContent={
        hasValidPosterSrc ?
          <CardMedia
            className={classes.media}
            image={hasValidPosterSrc ? posterSrc : undefined}
            title={title}
          />
          :
          null
      }
      {...otherProps}
    >
      <Typography
        gutterBottom
        variant={'h5'}
        component={'h2'}
      >
        {title}
      </Typography>
      <MovieDetailsList
        data={movie}
        details={['Type', 'Year']}
      />
      <Typography
        variant={'body2'}
        color={'textSecondary'}
        component={'p'}
        gutterBottom={true}
      >
        {plot}
      </Typography>
      <MovieRatings
        ratings={movie.Ratings}
      />
    </MovieCardLayout>
  )
}

export default MovieCard
