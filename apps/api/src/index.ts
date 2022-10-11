import { createServer } from "./server";
import { log } from "logger";

// eslint-disable-next-line turbo/no-undeclared-env-vars
const port = process.env.PORT || 5001;
const server = createServer();

server.listen(port).then(({url}) => {
  log(`API ready at ${url}`)
})
