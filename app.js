import { app } from "./utils/appHelper.js";

// Routes

import { router as BlogRouter } from "./routes/blogRouter.js";

// DB

import mongoose from "mongoose";
import { DB_URI } from "./db/mongodb.js";

process.on("uncaughtException", (err) => console.log(err));

// Starting App and DB
// Starts listening after connecting to db

mongoose
  .connect(DB_URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => app.listen(3333, () => console.log("http://localhost:3333")));

// Routes

app.use("/v1/blogs", BlogRouter);

app.use((_req, res) => res.send({ message: "No such endpoint!" }));
