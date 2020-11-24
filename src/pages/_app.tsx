import React from 'react'

import App from 'next/app'
import Router from 'next/router'

import { ThemeProvider, CssBaseline } from '@material-ui/core'
import theme from '../theme'
import FullScreenLoader from '../components/molecules/FullScreenLoader'

interface Props {
  Component: React.Component,
  store: any,
}


class MyApp extends App<Props> {
  public state = {
    isRouteLoading: false,
  }

  public componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    jssStyles?.parentNode?.removeChild(jssStyles)

    Router.events.on('routeChangeStart', () => this.setState({ isRouteLoading: true }))
    Router.events.on('routeChangeComplete', () => this.setState({ isRouteLoading: false }))
  }

  public render() {
    const { Component, pageProps } = this.props
    const { isRouteLoading } = this.state

    return (
      <ThemeProvider theme={theme}>
        {
          isRouteLoading ?
            <FullScreenLoader />
            :
            null
        }
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}

export default MyApp
