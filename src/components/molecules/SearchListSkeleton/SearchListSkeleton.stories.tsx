import React from 'react'

import { Meta, Story } from '@storybook/react/types-6-0'

import SearchListSkeleton, { SearchListSkeletonProps } from './SearchListSkeleton'

export default {
  title: 'SearchListSkeleton',
  component: SearchListSkeleton,
} as Meta<SearchListSkeletonProps>

const Template: Story<SearchListSkeletonProps> = (args) => <SearchListSkeleton {...args} />

export const Default = Template.bind({})
Default.args = {

}
