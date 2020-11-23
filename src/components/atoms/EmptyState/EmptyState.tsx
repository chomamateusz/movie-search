import React from 'react'

import { makeStyles, Typography, SvgIconProps } from '@material-ui/core'
import { Error, FindInPage } from '@material-ui/icons'

export type Variant = 'error' | 'empty'

export interface EmptyStateProps {
  variant?: Variant,
  message?: string,
  subMessage?: string,
  size?: number,
  color?: SvgIconProps['color'],
}

const icons: Record<Variant, React.ComponentType<SvgIconProps>> = {
  error: Error,
  empty: FindInPage,
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconRoot: {
    fontSize: ({ size }: { size: number }) => size,
  },
}))

export const EmptyState = (props: EmptyStateProps) => {
  const {
    message = '',
    subMessage = '',
    variant = 'error',
    size = 72,
    color = 'disabled',
    ...otherProps
  } = props
  const classes = useStyles({ size })

  const Icon = icons[variant]

  return (
    <div
      className={classes.root}
      {...otherProps}
    >
      <Icon
        classes={{ root: classes.iconRoot }}
        color={color}
      />
      <Typography
        variant={'subtitle1'}
      >
        {message}
      </Typography>
      <Typography
        variant={'subtitle2'}
      >
        {subMessage}
      </Typography>
    </div>
  )
}

export default EmptyState
