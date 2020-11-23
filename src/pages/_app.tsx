import React from 'react'

import App from 'next/app'

import { ThemeProvider, CssBaseline } from '@material-ui/core'
import theme from '../theme'

interface Props {
  Component: React.Component,
  store: any,
}

class MyApp extends App<Props> {
  public componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    jssStyles?.parentNode?.removeChild(jssStyles)
  }

  public render() {
    const { Component, pageProps } = this.props

    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}

export default MyApp
