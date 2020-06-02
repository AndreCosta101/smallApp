import express from "express";
import { helloWorld } from "./routes";

const app = express();

app.listen(3333);

app.get("/", helloWorld);
