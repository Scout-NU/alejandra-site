import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { colors } from '../style/colors';
import { apiEndpoint } from './../sm.json';
const prismicRepoName = /([\dA-Za-z-]+)?(\.cdn)?\.prismic\.io/.exec(
  apiEndpoint,
)[1]; //Regex to get repo ID

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="https://use.typekit.net/jds8ebt.css" />
          <script
            async
            defer
            src={`//static.cdn.prismic.io/prismic.js?repo=${prismicRepoName}&new=true`}
          />
        </Head>
        <body style={{ backgroundColor: colors.CREME }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }

  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
