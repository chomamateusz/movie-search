import React from 'react'

import App from 'next/app'
import Router from 'next/router'

import { ThemeProvider, CssBaseline } from '@material-ui/core'
import theme from '../theme'
import FullScreenLoader from '../components/molecules/FullScreenLoader'

interface CustomAppProps {
  Component: React.Component,
}

class CustomApp extends App<CustomAppProps> {
  public state = {
    isRouteLoading: false,
  }

  public async componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    jssStyles?.parentNode?.removeChild(jssStyles)

    Router.events.on('routeChangeStart', () => this.setState({ isRouteLoading: true }))
    Router.events.on('routeChangeComplete', () => this.setState({ isRouteLoading: false }))

    if(typeof window === 'undefined') return

    const WebFont = await import('webfontloader')
    WebFont.load({
      google: {
        families: [
          'Roboto:300,400,500,700&display=swap',
        ],
      },
    })
  }

  public render() {
    const { Component, pageProps } = this.props
    const { isRouteLoading } = this.state

    return (
      <>
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
      </>
    )
  }
}

export default CustomApp
