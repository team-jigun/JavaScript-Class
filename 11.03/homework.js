const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/plus", (req, res) => {
  let plus = Number(req.query.fd) + Number(req.query.sd);
  if (isNaN(plus)) {
    res.send(`body를 숫자로 입력해`);
  } else if (typeof plus == "number") {
    res.send(`${plus}`);
  } else {
    res.send(`body를 숫자로 입력해`);
  }
});
app.get("/minus", (req, res) => {
  let minus = Number(req.query.fd) - Number(req.query.sd);
  if (isNaN(minus)) {
    res.send(`body를 숫자로 입력해`);
  } else if (typeof minus == "number") {
    res.send(`${minus}`);
  } else {
    res.send(`body를 숫자로 입력해`);
  }
});
app.get("/multiply", (req, res) => {
  let multiply = Number(req.query.fd) * Number(req.query.sd);
  if (isNaN(multiply)) {
    res.send(`body를 숫자로 입력해`);
  } else if (typeof multiply == "number") {
    res.send(`${multiply}`);
  } else {
    res.send(`body를 숫자로 입력해`);
  }
});
app.get("/pow", (req, res) => {
  let pow = Math.pow(Number(req.query.fd), Number(req.query.sd));
  if (isNaN(pow)) {
    res.send(`body를 숫자로 입력해`);
  } else if (typeof pow == "number") {
    res.send(`${pow}`);
  } else {
    res.send(`body를 숫자로 입력해`);
  }
});
app.listen(port, (_) => {
  console.log(`Server On: ${port}`);
});
