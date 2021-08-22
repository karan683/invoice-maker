import Document , { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;1,700&family=Roboto:ital,wght@0,300;1,100&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <div id="backdrop-hook"></div>
          <div id="sideDrawer-hook"></div>
          <NextScript />
        </body>
      </Html>
    );
  }
}
