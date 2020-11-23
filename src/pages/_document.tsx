import React from 'react'

import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

import { ServerStyleSheets } from '@material-ui/core/styles'
import theme from '../theme'

class MyDocument extends Document {
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
      <Html>
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png" />
          <link rel="manifest" href="site.webmanifest" />
          <link rel="shortcut icon" href="favicon.ico" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="msapplication-config" content="browserconfig.xml" />
          <meta name="theme-color" content={theme.palette.primary.main} />

          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
