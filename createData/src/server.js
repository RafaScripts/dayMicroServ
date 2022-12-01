import express from "express";
import cors from 'cors';

import { dbConnect } from "./database";
import Routes from "./routes";

const app = express();

app.use(express.json());

app.use(cors());

// ROUTER
app.use(Routes)

dbConnect().then(async () => {
  app.listen(process.env.PORT || 3333, () => {
    console.log(`Server is running on port ${process.env.PORT || 3333}`);
  });
});