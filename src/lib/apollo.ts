import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ng6o2203wv01z0h49k3y0p/master',
  cache: new InMemoryCache()
})