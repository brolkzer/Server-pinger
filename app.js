import express from "express";
import fetch from "node-fetch";
const app = express();
const port = 3000;
const urlToPing = "https://agrafes-server.onrender.com/api/products";
const self = "https://server-pinger-projects.onrender.com";

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  setInterval(() => {
    fetch(urlToPing).then(() => console.log(`Ping to ${urlToPing} done.`));
    fetch(self).then(() => console.log(`Ping to ${self} done.`));
  }, 60000);
});
