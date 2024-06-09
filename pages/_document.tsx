import { Html, Head, Main, NextScript } from "next/document";
import { Theme } from "@radix-ui/themes";
import { Toaster } from "@/components/ui/toaster"
import { SessionProvider } from "next-auth/react";

const Document = () => {
  return (
    <Html lang="es-CO">
      <Head />
      <body>

        <Theme>
          <Main />
          <NextScript />
          <Toaster />
        </Theme>

      </body>
      
    </Html>
  );
};

export default Document;
