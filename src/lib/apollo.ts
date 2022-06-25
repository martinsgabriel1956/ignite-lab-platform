import { ApolloClient, InMemoryCache } from "@apollo/client";

const { VITE_API_URL, VITE_API_ACCESS_TOKEN } = import.meta.env;

export const client = new ApolloClient({
  uri: VITE_API_URL,
  headers: {
    'Authorization': `Bearer ${VITE_API_ACCESS_TOKEN}`
  },
  cache: new InMemoryCache()
})