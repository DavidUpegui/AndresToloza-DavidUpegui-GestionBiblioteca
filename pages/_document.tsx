import { Html, Head, Main, NextScript } from "next/document";
import { Theme } from "@radix-ui/themes";
const Document = () => {
  return (
    <Html lang="es-CO">
      <Head />
      <body>
        <Theme>
          <Main />
          <NextScript />
        </Theme>
      </body>
    </Html>
  );
};

export default Document;
