import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <div id="main">
          <Main />
        </div>
        <NextScript />
        <Script
          src="https://js.jotform.com/JotFormCustomWidget.min.js"
          strategy="beforeInteractive"
          onLoad={() =>
            console.log(`script loaded correctly, window.FB has been populated`)
          }
        ></Script>
      </body>
    </Html>
  );
}
