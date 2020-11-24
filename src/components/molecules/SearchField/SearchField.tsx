import React from 'react'

import { makeStyles, TextField, OutlinedTextFieldProps, InputAdornment } from '@material-ui/core'
import { Search, Clear } from '@material-ui/icons'

export interface SearchFieldProps extends Omit<OutlinedTextFieldProps, 'variant'> {
  onClearClick?: () => void,
}

const useStyles = makeStyles((theme) => ({
  iconClear: {
    cursor: 'pointer',
  },
}))

export const SearchField = (props: SearchFieldProps) => {
  const classes = useStyles(props)
  const {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onClearClick = () => {},
    value,
    ...otherProps
  } = props

  return (
    <TextField
      value={value}
      fullWidth={true}
      variant={'outlined'}
      placeholder={'Type to search...'}
      InputProps={{
        endAdornment: (
          <InputAdornment position={'end'}>
            {
              value === '' ?
                <Search
                  color={'disabled'}
                />
                :
                <Clear
                  classes={{ root: classes.iconClear}}
                  color={'disabled'}
                  onClick={onClearClick}
                />
            }
          </InputAdornment>
        ),
      }}
      {...otherProps}
    />
  )
}

export default SearchField
