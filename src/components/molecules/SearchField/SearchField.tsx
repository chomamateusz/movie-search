import React from 'react'

import dynamic from 'next/dynamic'

import { TextField, OutlinedTextFieldProps, InputAdornment } from '@material-ui/core'

const BrowserOnlyIcon = dynamic(() => import('./Icon'), { ssr: false })

export interface SearchFieldProps extends Omit<OutlinedTextFieldProps, 'variant'> {
  onClearClick?: () => void,
}

export const SearchField = (props: SearchFieldProps) => {
  const {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onClearClick = () => {},
    value,
    ...otherProps
  } = props

  const ref = React.useRef<HTMLInputElement>()
  React.useEffect(() => {
    if(!ref.current) return
    if(!ref.current.focus) return
    ref.current.focus()
  }, [])

  return (
    <TextField
      value={value}
      fullWidth={true}
      autoFocus={true}
      variant={'outlined'}
      placeholder={'Type to search...'}
      label={'Movie title'}
      InputLabelProps={{
        shrink: true,
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position={'end'}>
            <BrowserOnlyIcon
              type={value === '' ? 'search' : 'clear'}
              onClick={value === '' ? undefined : onClearClick}
            />
          </InputAdornment>
        ),
      }}
      {...otherProps}
    />
  )
}

export default SearchField
