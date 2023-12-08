import dotenv from "dotenv";

import path from "path";
import { app } from "./app.js";

const __dirname = path.resolve();
const PORT = process.env.PORT || 3001;
dotenv.config({ path: path.join(__dirname, ".env") });

const port = parseInt(PORT, 10);
app.listen(port, () => {
  console.log("App running on port", port);
});
//
