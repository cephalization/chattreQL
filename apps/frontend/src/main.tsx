import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { ApolloProvider } from "@apollo/client";
import { createApolloClient } from "apollo-client-custom";

import "./index.css";
import App from "./App";

const URL = `http://${import.meta.env.VITE_API_URI}/`;
const WS_URL = `ws://${import.meta.env.VITE_API_URI}/`;

const client = createApolloClient(URL, WS_URL);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>
);
