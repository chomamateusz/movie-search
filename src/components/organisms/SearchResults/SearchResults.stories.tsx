import React from 'react'

import { Meta, Story } from '@storybook/react/types-6-0'

import SearchResults, { SearchResultsProps } from './SearchResults'

export default {
  title: 'SearchResults',
  component: SearchResults,
} as Meta<SearchResultsProps>

const Template: Story<SearchResultsProps> = (args) => <SearchResults {...args} />

export const Default = Template.bind({})
Default.args = {

}
