const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/plus", (req, res) => {
  console.log("Post test");

  let PNum1 = parseInt(req.query.plusNum1);
  let PNum2 = parseInt(req.query.plusNum2);

  res.send(`${PNum1 + PNum2}`);
});

app.get("/minus", (req, res) => {
  console.log("Post test");

  let MNum1 = parseInt(req.query.minusNum1);
  let MNum2 = parseInt(req.query.minusNum2);

  res.send(`${MNum1 - MNum2}`);
});

app.listen(port, (_) => {
  console.log(`Server On! ${port}`);
});
