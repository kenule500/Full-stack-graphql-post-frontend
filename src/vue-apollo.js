import {
  ApolloClient,
  InMemoryCache,
  split,
  createHttpLink,
} from "@apollo/client/core";
import { createUploadLink } from "apollo-upload-client";
// import { WebSocketLink } from "@apollo/client/link/ws";
import { setContext } from "@apollo/client/link/context";
import { useStore } from "vuex";
const store = useStore();
import { computed } from "vue";

// Http Link
const httpLink = createUploadLink({
  uri: process.env.APOLLO_API_URL || "http://localhost:4000/graphql",
});

// WebSocket connection to the GraphQL subscriptions endpoint
// const wsLink = new WebSocketLink({
//   uri: "ws://localhost:4000/graphql",
//   options: {
//     reconnect: true,
//   },
// });

// Auth middleware to include authentication token in requests
const authLink = setContext((_, { headers }) => {
  // Get the authentication token from the Vuex store
  // const token = store.state.Auth.token;
  // let tok = computed(() => store.getters["Auth/token"]);
  // const token = tok.value;
  const token = localStorage.getItem("apollo-token");

  // Add the token to the headers if it exists
  if (token) {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${token}`,
      },
    };
  }

  return {
    headers,
  };
});

// // Combining the HTTP and WebSocket links
const link = authLink.concat(httpLink);

// const link = authLink.concat(
//   split(
//     // Split the link based on operation type
//     ({ query }) => {
//       const definition = getMainDefinition(query);
//       return (
//         definition.kind === "OperationDefinition" &&
//         definition.operation === "subscription"
//       );
//     },
//     wsLink,
//     httpLink
//   )
// );

// Apollo Client instance
const apolloClient = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default apolloClient;

// import { ApolloClient, InMemoryCache } from "@apollo/client/core";
// import { createHttpLink } from "@apollo/client/http";
// import { setContext } from "@apollo/client/link/context";
// import { WebSocketLink } from "@apollo/client/link/ws";
// import { DefaultApolloClient } from "@vue/apollo-composable";
// import store from "./store";

// // HTTP connection to the GraphQL server
// const httpLink = createHttpLink({
//   uri: "http://localhost:4000/graphql",
// });

// // WebSocket connection to the GraphQL subscriptions endpoint
// const wsLink = new WebSocketLink({
//   uri: "ws://localhost:4000/graphql",
//   options: {
//     reconnect: true,
//   },
// });

// // Auth middleware to include authentication token in requests
// const authLink = setContext((_, { headers }) => {
//   // Get the authentication token from the Vuex store
//   const token = store.state.auth.token;

//   // Add the token to the headers if it exists
//   if (token) {
//     return {
//       headers: {
//         ...headers,
//         authorization: `Bearer ${token}`,
//       },
//     };
//   }

//   return {
//     headers,
//   };
// });

// // Combining the HTTP and WebSocket links
// const link = authLink.concat(
//   split(
//     // Split the link based on operation type
//     ({ query }) => {
//       const definition = getMainDefinition(query);
//       return (
//         definition.kind === "OperationDefinition" &&
//         definition.operation === "subscription"
//       );
//     },
//     wsLink,
//     httpLink
//   )
// );

// // Apollo Client instance
// const apolloClient = new ApolloClient({
//   link,
//   cache: new InMemoryCache(),
// });

// // Export the Apollo Client instance
// export default apolloClient;
