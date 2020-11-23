import React from 'react'

import Select, { Props as SelectProps } from 'react-select'

import { makeStyles } from '@material-ui/core'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SearchFieldProps extends SelectProps {}

const useStyles = makeStyles((theme) => ({
  root: {},
}))

export const SearchField = (props: SearchFieldProps) => {
  const classes = useStyles(props)
  const { ...otherProps } = props

  return (
    <Select
      className={classes.root}
      {...otherProps}
    />
  )
}

export default SearchField
