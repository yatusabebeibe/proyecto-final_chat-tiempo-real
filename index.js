import { createServer } from "http";
import { createApp } from "./app.js";

const PORT = process.env.PORT ?? 3000;

const app = createApp();
const server = createServer(app);

server.listen(3000, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
