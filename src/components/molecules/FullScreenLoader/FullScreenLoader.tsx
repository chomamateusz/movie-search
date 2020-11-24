import React from 'react'

import { makeStyles } from '@material-ui/core'

import Loader from '../../atoms/Loader'

export interface FullScreenLoaderProps {
  [key: string]: any,
  isRelative?: boolean,
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: ({ isRelative }: FullScreenLoaderProps) => isRelative ? '100%' : '100vw',
    height: ({ isRelative }: FullScreenLoaderProps) => isRelative ? '100%' : '100vh',
    position: ({ isRelative }: FullScreenLoaderProps) => isRelative ? 'relative' : 'fixed',
    left: 0,
    top: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.common.white,
    zIndex: 2,
  },
}))

export const FullScreenLoader = (props: FullScreenLoaderProps) => {
  const { isRelative, ...otherProps } = props
  const classes = useStyles({ isRelative })

  return (
    <div
      className={classes.root}
    >
      <Loader
        {...otherProps}
      />
    </div>
  )
}

export default FullScreenLoader
