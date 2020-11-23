import React from 'react'

import { Meta, Story } from '@storybook/react/types-6-0'

import SearchItemSkeleton, { SearchItemSkeletonProps } from './SearchItemSkeleton'

export default {
  title: 'SearchItemSkeleton',
  component: SearchItemSkeleton,
} as Meta<SearchItemSkeletonProps>

const Template: Story<SearchItemSkeletonProps> = (args) => <SearchItemSkeleton {...args} />

export const Default = Template.bind({})
Default.args = {

}
