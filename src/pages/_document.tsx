import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
  return (
    <Html lang="es">
      <Head>
        <link rel="shortcut icon" href="/ico-logo.png"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
