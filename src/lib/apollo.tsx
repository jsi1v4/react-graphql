import React, { useMemo } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as Provider,
  useLazyQuery,
  useApolloClient,
  gql,
} from "@apollo/client";

export const query = gql;
export const useQuery = useLazyQuery;
export const useApi = useApolloClient;
export class Api extends ApolloClient<object> {}

export const ApolloProvider = ({ children }) => {
  const client = useMemo(() => {
    return new ApolloClient({
      uri: "https://48p1r2roz4.sse.codesandbox.io",
      cache: new InMemoryCache(),
    });
  }, []);

  return <Provider client={client}>{children}</Provider>;
};
