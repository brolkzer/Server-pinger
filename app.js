import express from "express";
import fetch from "node-fetch";
const app = express();
const port = 3000;
const irclike = "https://irclike-server.onrender.com/api/messages";
const agrafesServer = "https://agrafes-serv.onrender.com/api/products";
const self = "https://server-pinger-projects.onrender.com";

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  setInterval(() => {
    fetch(agrafesServer).then(() =>
      console.log(`Ping to ${agrafesServer} done.`)
    );
    fetch(irclike).then(() => console.log(`Ping to ${irclike} done.`));
    fetch(self).then(() => console.log(`Ping to ${self} done.`));
  }, 60000);
});
