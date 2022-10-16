import { createApolloClient } from "apollo-client-custom";

const URL = `http://${process.env.NEXT_PUBLIC_API_URI}/`;
const WS_URL = `ws://${process.env.NEXT_PUBLIC_API_URI}/`;

export const client = createApolloClient(URL, WS_URL);
