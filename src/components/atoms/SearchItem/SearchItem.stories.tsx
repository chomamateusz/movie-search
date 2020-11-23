import React from 'react'

import { Meta, Story } from '@storybook/react/types-6-0'

import SearchItem, { SearchItemProps } from './SearchItem'

import { sampleData } from '../../../hooks/api/movieSearch'

const movie = sampleData[0]

export default {
  title: 'SearchItem',
  component: SearchItem,
} as Meta<SearchItemProps>

const Template: Story<SearchItemProps> = (args) => <SearchItem {...args} />

export const Empty = Template.bind({})

export const WithoutPoster = Template.bind({})
WithoutPoster.args = {
  ...WithoutPoster.args,
  title: movie.Title,
  year: movie.Year,
  type: movie.Type,
}

export const WithoutYear = Template.bind({})
WithoutYear.args = {
  ...WithoutYear.args,
  title: movie.Title,
  type: movie.Type,
  posterSrc: movie.Poster,
}

export const WithoutType = Template.bind({})
WithoutType.args = {
  ...WithoutType.args,
  title: movie.Title,
  year: movie.Year,
  posterSrc: movie.Poster,
}

export const WithAllData = Template.bind({})
WithAllData.args = {
  ...WithAllData.args,
  title: movie.Title,
  year: movie.Year,
  type: movie.Type,
  posterSrc: movie.Poster,
}
