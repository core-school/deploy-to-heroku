import express from "express";
import cors from "cors";

export const app = express();

app.use(cors({ origin: false }));

app.get("/", (req, res) => {
  return res.json({ status: "HOLA" });
});
