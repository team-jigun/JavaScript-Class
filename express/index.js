const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.get('/plus', (req, res)=>{

    const result = Number(req.query.a) + Number(req.query.b)

    res.send(`${result}`);
});

app.get('/minus', (req, res)=>{

    const result = Number(req.query.a) - Number(req.query.b)

    res.send(`${result}`);
})

app.listen(port, ()=>{
    console.log(`Server On! ${port}`)
});