import React from 'react'

import { Meta, Story } from '@storybook/react/types-6-0'

import MovieRatings, { MovieRatingsProps } from './MovieRatings'

import { data as movie } from '../../../types/api/movie'

export default {
  title: 'MovieRatings',
  component: MovieRatings,
} as Meta<MovieRatingsProps>

const Template: Story<MovieRatingsProps> = (args) => <MovieRatings {...args} />

export const Default = Template.bind({})
Default.args = {
  ratings: movie.Ratings,
}
