import React from 'react'

import { makeStyles, List, ListProps } from '@material-ui/core'

export interface SearchListProps<DataType> extends ListProps {
  items: DataType[],
  renderItem?: (data: DataType, i: number, array: DataType[]) => React.ReactNode,
}

const useStyles = makeStyles((theme) => ({
  root: {},
}))

export const SearchList = <DataType, >(props: SearchListProps<DataType>) => {
  const classes = useStyles(props)
  const {
    items,
    renderItem = (data, i) => <li key={i}>{JSON.stringify(data)}</li>,
    ...otherProps } = props

  return (
    <List
      className={classes.root}
      {...otherProps}
    >
      {
        items.map(renderItem)
      }
    </List>
  )
}

export default SearchList
