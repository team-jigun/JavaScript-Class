const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/ps', (req,res) => {
  let ps1 = parseInt(req.query.ps1);
  let ps2 = parseInt(req.query.ps2);
  res.send(`${ps1+ps2}`);
});

app.get('/ms', (req,res) => {
  let ms1 = parseInt(req.query.ms1);
  let ms2 = parseInt(req.query.ms2);
  res.send(`${ms1-ms2}`);
});

app.listen(port, _ =>{
  console.log(`Server On! ${port}`);
});