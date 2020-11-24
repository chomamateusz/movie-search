import React from 'react'

import { makeStyles, Card, CardProps, CardContent, CardMedia } from '@material-ui/core'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MovieCardLayoutProps extends CardProps {
  children: React.ReactNode,
  mediaContent?: React.ReactNode,
  mediaContentProps?: Record<string, unknown>,
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
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
  content: {
    width: '100%',
  },
}))

export const MovieCardLayout = (props: MovieCardLayoutProps) => {
  const classes = useStyles(props)
  const {
    children,
    mediaContent: mediaContentFromProps,
    mediaContentProps = {},
    ...otherProps
  } = props

  const defaultMediaContent = (
    <CardMedia
      className={classes.media}
      {...mediaContentProps}
    />
  )
  const mediaContent = mediaContentFromProps || defaultMediaContent

  return (
    <Card
      className={classes.root}
      {...otherProps}
    >

      {mediaContent}
      <CardContent
        className={classes.content}
      >
        {children}
      </CardContent>
    </Card>
  )
}

export default MovieCardLayout
