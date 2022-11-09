const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/plus", (req, res) => {
  console.log("Post test");

  let PlusNum1 = parseInt(req.query.plusNum1);
  let PlusNum2 = parseInt(req.query.plusNum2);

  res.send(`${PlusNum1 + PlusNum2}`);
});

app.get("/minus", (req, res) => {
  console.log("Post test");

  let minusNum1 = parseInt(req.query.minusNum1);
  let minusNum2 = parseInt(req.query.minusNum2);

  res.send(`${minusNum1 - minusNum2}`);
});

app.listen(port, (_) => {
  console.log(`Server On! ${port}`);
});
