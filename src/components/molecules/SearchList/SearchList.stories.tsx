import React from 'react'

import { Meta, Story } from '@storybook/react/types-6-0'

import SearchItem from '../../atoms/SearchItem'
import SearchList, { SearchListProps } from './SearchList'

import { sampleData, SearchResultItem } from '../../../types/api/movies'

export default {
  title: 'SearchList',
  component: SearchList,
} as Meta<SearchListProps<SearchResultItem>>

const Template: Story<SearchListProps<SearchResultItem>> = (args) => <SearchList {...args} />

export const Default = Template.bind({})
Default.args = {
  ...Default.args,
  items: sampleData,
}

export const RenderSearchItem = Template.bind({})
RenderSearchItem.args = {
  ...RenderSearchItem.args,
  items: sampleData,
  renderItem: (item) => (
    <SearchItem
      key={item.imdbID}
      title={item.Title}
      year={item.Year}
      type={item.Type}
      posterSrc={item.Poster}
    />
  ),
}
