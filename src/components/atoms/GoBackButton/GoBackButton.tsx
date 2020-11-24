import React from 'react'

import { useRouter } from 'next/router'

import { makeStyles, Button, ButtonProps } from '@material-ui/core'
import { ArrowBack } from '@material-ui/icons'

import { goBackIfPossible } from './historyGoBack'

export interface GoBackButtonProps extends ButtonProps {
  fallbackPath?: string,
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}))

export const GoBackButton = (props: GoBackButtonProps) => {
  const classes = useStyles(props)
  const router = useRouter()
  const {
    fallbackPath = '/',
    ...otherProps
  } = props

  return (
    <Button
      className={classes.root}
      onClick={() => goBackIfPossible(router)(fallbackPath)}
      fullWidth={true}
      startIcon={<ArrowBack />}
      {...otherProps}
    >
      Go back
    </Button>
  )
}

export default GoBackButton
