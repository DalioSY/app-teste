import express from "express";
import { connectDatabase } from "./database/index.js";
import cors from "cors";
import routes from "./routes.js";

const PORT = 3334;
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

connectDatabase()
  .then(() => {
    app.listen(PORT, () => console.log("✔️ Connected "));
  })
  .catch(err => console.log(err));
