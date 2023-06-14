import "dotenv/config";
import express from "express";

const app = express();
// eslint-disable-next-line no-unused-vars
import db from "./utils/connection.js";
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
