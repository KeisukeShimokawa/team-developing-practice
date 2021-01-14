const express = require("express");
const path = require("path");
const app = express();

app.use("/public", express.static(path.resolve(__dirname + "/public")));

app.get("/", (req, res) => {
  console.log(req.headers);
  res.status(200);
  res.json({
    message: "root access succeed"
  })
});

app.listen(8080);