import React from 'react'

import { Meta, Story } from '@storybook/react/types-6-0'

import MoviePageLayout, { MoviePageLayoutProps } from './MoviePageLayout'

export default {
  title: 'MoviePageLayout',
  component: MoviePageLayout,
} as Meta<MoviePageLayoutProps>

const Template: Story<MoviePageLayoutProps> = (args) => <MoviePageLayout {...args} />

export const Default = Template.bind({})
Default.args = {

}
