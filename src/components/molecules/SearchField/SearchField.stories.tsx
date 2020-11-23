import React from 'react'

import { Meta, Story } from '@storybook/react/types-6-0'

import SearchField, { SearchFieldProps } from './SearchField'

export default {
  title: 'SearchField',
  component: SearchField,
} as Meta<SearchFieldProps>

const Template: Story<SearchFieldProps> = (args) => <SearchField {...args} />

export const Default = Template.bind({})
Default.args = {

}
