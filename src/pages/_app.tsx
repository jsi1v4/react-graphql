import React from "react";
import type { AppProps } from "next/app";

import { ApolloProvider } from "../lib/apollo";
import { HomeProvider } from "../providers";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider>
      <HomeProvider>
        <Component {...pageProps} />
      </HomeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
