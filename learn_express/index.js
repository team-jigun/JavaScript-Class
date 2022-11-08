const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/plus", (req, res) => {
  let { num1, num2 } = getQuery(req);

  res.send(`${num1} + ${num2} = ${num1 + num2}`);
});

app.get("/minus", (req, res) => {
  let { num1, num2 } = getQuery(req);

  res.send(`${num1} - ${num2} = ${num1 - num2}`);
});

app.get("/multi", (req, res) => {
  let { num1, num2 } = getQuery(req);

  res.send(`${num1} * ${num2} = ${num1 * num2}`);
});

app.get("/div", (req, res) => {
  let { num1, num2 } = getQuery(req);

  res.send(`${num1} / ${num2} = ${num1 / num2}`);
});

getQuery = (req) => {
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);

  return { num1, num2 };
};

app.listen(port, () => {
  console.log(`Server On! ${port}`);
});
