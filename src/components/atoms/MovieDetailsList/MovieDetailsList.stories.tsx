import React from 'react'

import { Meta, Story } from '@storybook/react/types-6-0'

import MovieDetailsList, { MovieDetailsListProps } from './MovieDetailsList'

import { data as movie } from '../../../types/api/movie'

export default {
  title: 'MovieDetailsList',
  component: MovieDetailsList,
} as Meta<MovieDetailsListProps>

const Template: Story<MovieDetailsListProps> = (args) => <MovieDetailsList {...args} />

export const Default = Template.bind({})
Default.args = {
  ...Default.args,
  data: movie,
}

export const OnlyTitleAndYear = Template.bind({})
OnlyTitleAndYear.args = {
  ...OnlyTitleAndYear.args,
  data: movie,
  details: ['Title', 'Year'],
}
