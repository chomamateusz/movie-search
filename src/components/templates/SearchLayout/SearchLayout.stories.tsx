import React from 'react'

import { Meta, Story } from '@storybook/react/types-6-0'

import SearchLayout, { SearchLayoutProps } from './SearchLayout'

export default {
  title: 'SearchLayout',
  component: SearchLayout,
} as Meta<SearchLayoutProps>

const Template: Story<SearchLayoutProps> = (args) => <SearchLayout {...args} />

export const Default = Template.bind({})
Default.args = {
  ...Default.args,
  searchBarContent: <div style={{ backgroundColor: 'red' }}>searchBarContent</div>,
  searchResultsContent: <div style={{ backgroundColor: 'green' }}>searchResultsContent</div>,
}

export const LongContent = Template.bind({})
LongContent.args = {
  ...LongContent.args,
  searchBarContent: <div style={{ backgroundColor: 'red' }}>searchBarContent</div>,
  searchResultsContent: (
    <div style={{ backgroundColor: 'green' }}>
      {(new Array(100)).fill('lorem ipsum....').map((el, i) => <div key={i}>{el}</div>)}
    </div>
  ),
}
