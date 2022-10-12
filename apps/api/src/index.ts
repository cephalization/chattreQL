import { createServer } from "./server";
import { log } from "logger";

// eslint-disable-next-line turbo/no-undeclared-env-vars
const port = process.env.PORT || 5001;

async function startServing() {
  const { server, apolloServer } = await createServer();

  server.listen({ port });
  log(`API ready at http://localhost:${port}${apolloServer.graphqlPath}`);
}

startServing();
