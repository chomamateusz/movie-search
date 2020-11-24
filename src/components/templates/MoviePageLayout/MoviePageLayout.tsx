import React from 'react'

import { makeStyles } from '@material-ui/core'

export interface MoviePageLayoutProps {
  children: React.ReactNode,
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}))

export const MoviePageLayout = (props: MoviePageLayoutProps) => {
  const classes = useStyles(props)
  const { children } = props

  return (
    <div
      className={classes.root}
    >
      {children}
    </div>
  )
}

export default MoviePageLayout
