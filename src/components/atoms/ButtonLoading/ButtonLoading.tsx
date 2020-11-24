import React from 'react'

import { makeStyles, CircularProgress, Button, ButtonProps } from '@material-ui/core'

export interface ButtonLoadingProps extends ButtonProps {
  loading?: boolean,
}

const useStyles = makeStyles((theme) => ({
  root: {},
}))

export const ButtonLoading = (props: ButtonLoadingProps) => {
  const classes = useStyles(props)
  const {
    loading = false,
    children,
    ...otherProps
  } = props

  return (
    <Button
      className={classes.root}
      disabled={loading}
      {...otherProps}
    >
      {
        loading ?
          <CircularProgress size={14} />
          :
          children
      }
    </Button>
  )
}

export default ButtonLoading
