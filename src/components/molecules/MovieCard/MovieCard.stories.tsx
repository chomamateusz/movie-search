import React from 'react'

import { Meta, Story } from '@storybook/react/types-6-0'

import MovieCard, { MovieCardProps } from './MovieCard'

import { data as movie } from '../../../types/api/movie'

export default {
  title: 'MovieCard',
  component: MovieCard,
} as Meta<MovieCardProps>

const Template: Story<MovieCardProps> = (args) => <MovieCard {...args} />

export const Default = Template.bind({})
Default.args = {
  ...Default.args,
  movie,
}
