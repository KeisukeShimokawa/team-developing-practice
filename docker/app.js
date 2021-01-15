const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const app = express();

app.use(cookieParser());
app.use("/public", express.static(path.resolve(__dirname + "/public")));

app.get("/", (req, res) => {
  console.log(req.headers);

  console.log(req.cookies);

  res.cookie("key", "value", {
    maxAge: 60000,
    httpOnly: false
  })

  res.status(200);
  res.json({
    message: "root access succeed",
    cookies: req.cookies
  })
});

app.get("/get", (req, res) => {
  console.log(req.headers);
  console.log(req.cookies);

  res.status(200);
  res.json({
    message: "fetch get"
  })
})

app.post("/post", (req, res) => {
  console.log(req.headers);
  console.log(req.cookies);

  res.status(200);
  res.json({
    message: "fetch post"
  })
})

app.listen(8080);