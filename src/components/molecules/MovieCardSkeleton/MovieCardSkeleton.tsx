import React from 'react'

import { makeStyles, CardProps, Typography } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'

import MovieCardLayout from '../../templates/MovieCardLayout'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MovieCardSkeletonProps extends CardProps {}

const useStyles = makeStyles((theme) => ({
  card: {
    minWidth: 320,
    height: 400,
  },
}))

export const MovieCardSkeleton = (props: MovieCardSkeletonProps) => {
  const classes = useStyles(props)

  return (
    <MovieCardLayout
      mediaContent={
        <Skeleton
          className={classes.card}
          variant={'rect'}
        />
      }
    >
      <Typography
        gutterBottom
        variant={'h5'}
        component={'h2'}
      >
        <Skeleton variant={'text'} />
      </Typography>
      <Typography
        variant={'body2'}
        color={'textSecondary'}
        component={'p'}
      >
        <Skeleton variant={'text'} />
        <Skeleton variant={'text'} />
        <Skeleton variant={'text'} />
      </Typography>
    </MovieCardLayout>
  )
}

export default MovieCardSkeleton
