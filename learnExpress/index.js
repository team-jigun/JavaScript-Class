const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/plus", (req, res) => {
  let { value1, value2 } = getValue(req);
  res.send(`${value1} + ${value2} = ${value1 + value2}`);
});

app.get("/minus", (req, res) => {
  let { value1, value2 } = getValue(req);
  res.send(`${value1} - ${value2} = ${value1 - value2}`);
});

let getValue = function (req) {
  const value1 = parseInt(req.query.value1);
  const value2 = parseInt(req.query.value2);

  return { value1, value2 };
};

app.listen(port, () => {
  console.log(`Sever On! ${port}`);
});
