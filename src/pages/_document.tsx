import React from 'react'

import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

import { ServerStyleSheets } from '@material-ui/core/styles'
import theme from '../theme'

class CustomDocument extends Document {
  public static  getInitialProps = async (ctx: DocumentContext) => {
    const sheets = new ServerStyleSheets()
    const originalRenderPage = ctx.renderPage

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
      })

    const initialProps = await Document.getInitialProps(ctx)

    return {
      ...initialProps,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
    }
  }

  public render() {
    return (
      <Html
        lang={'en'}
      >
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png" />
          <link rel="manifest" href="site.webmanifest" />
          <link rel="shortcut icon" href="favicon.ico" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="msapplication-config" content="browserconfig.xml" />
          <meta name="theme-color" content={theme.palette.primary.main} />

          <meta name="viewport" content="initial-scale=1.0, width=device-width" />

          <title>Movie Search App</title>
          <meta name="description" content="Search movies from OMDb API!"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default CustomDocument
