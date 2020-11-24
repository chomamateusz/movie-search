import React from 'react'

import { makeStyles } from '@material-ui/core'

export interface MoviePageLayoutProps {
  [key: string]: any,
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
  const { children, ...otherProps } = props

  return (
    <div
      className={classes.root}
      {...otherProps}
    >
      {children}
    </div>
  )
}

export default MoviePageLayout
