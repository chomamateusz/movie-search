import React from 'react'

import { Meta, Story } from '@storybook/react/types-6-0'

import MovieCardLayout, { MovieCardLayoutProps } from './MovieCardLayout'

export default {
  title: 'MovieCardLayout',
  component: MovieCardLayout,
} as Meta<MovieCardLayoutProps>

const Template: Story<MovieCardLayoutProps> = (args) => <MovieCardLayout {...args} />

export const Default = Template.bind({})
Default.args = {

}
