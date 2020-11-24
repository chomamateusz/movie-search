import React from 'react'

import { makeStyles, CircularProgress, CircularProgressProps } from '@material-ui/core'

export interface LoaderProps extends CircularProgressProps {
  children?: React.ReactNode,
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
}))

export const Loader = (props: LoaderProps) => {
  const classes = useStyles(props)
  const { children, ...otherProps } = props

  return (
    <div
      className={classes.root}
    >
      <CircularProgress
        className={classes.root}
        variant={'indeterminate'}
        {...otherProps}
      />
      {children}
    </div>
  )
}

export default Loader
