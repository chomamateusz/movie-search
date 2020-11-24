import React from 'react'

import { Meta, Story } from '@storybook/react/types-6-0'

import SearchHistory, { SearchHistoryProps } from './SearchHistory'

export default {
  title: 'SearchHistory',
  component: SearchHistory,
} as Meta<SearchHistoryProps>

const Template: Story<SearchHistoryProps> = (args) => <SearchHistory {...args} />

export const Default = Template.bind({})
Default.args = {

}
