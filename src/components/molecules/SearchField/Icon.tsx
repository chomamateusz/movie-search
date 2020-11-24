import React from 'react'

import { makeStyles, SvgIconProps } from '@material-ui/core'
import { Search, Clear } from '@material-ui/icons'

export interface IconProps extends SvgIconProps {
  type: 'clear' | 'search',
}

const useStyles = makeStyles((theme) => ({
  iconClear: {
    cursor: 'pointer',
  },
}))

export const Icon = (props: IconProps) => {
  const classes = useStyles(props)
  const {
    type,
    ...otherProps
  } = props

  return (
    type === 'search' ?
      <Search
        color={'disabled'}
        {...otherProps}
      />
      :
      <Clear
        classes={{ root: classes.iconClear}}
        color={'disabled'}
        {...otherProps}
      />
  )
}

export default Icon
