import React from 'react'

import { Meta, Story } from '@storybook/react/types-6-0'

import MovieCardSkeleton, { MovieCardSkeletonProps } from './MovieCardSkeleton'

export default {
  title: 'MovieCardSkeleton',
  component: MovieCardSkeleton,
} as Meta<MovieCardSkeletonProps>

const Template: Story<MovieCardSkeletonProps> = (args) => <MovieCardSkeleton {...args} />

export const Default = Template.bind({})
Default.args = {

}
