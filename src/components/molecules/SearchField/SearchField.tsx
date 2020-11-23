import React from 'react'

import { TextField, TextFieldProps, InputAdornment } from '@material-ui/core'
import { Search } from '@material-ui/icons'

export type SearchFieldProps = TextFieldProps

export const SearchField = (props: SearchFieldProps) => {
  const { ...otherProps } = props

  return (
    <TextField
      variant={'outlined'}
      fullWidth={true}
      placeholder={'Type to search...'}
      InputProps={{
        endAdornment: (
          <InputAdornment position={'end'}>
            <Search
              color={'disabled'}
            />
          </InputAdornment>
        ),
      }}
      {...otherProps}
    />
  )
}

export default SearchField
