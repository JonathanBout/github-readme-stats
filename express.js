import "dotenv/config";
import statsCard from "./api/index.js";
import repoCard from "./api/pin.js";
import langCard from "./api/top-langs.js";
import gistCard from "./api/gist.js";
import json from "./api/json/index.js";
import express from "express";

const app = express();
app.listen(process.env.port || 9000, () => {
  console.log("Listening on port " + (process.env.port || 9000));
});

app.get("/", statsCard);
app.get("/pin", repoCard);
app.get("/top-langs", langCard);
app.get("/gist", gistCard);
app.get("/json", json);
