const { request } = require('express');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/plus', (req, res)=>{
    console.log('Get test');
    const a = req.query.a;
    const b = req.query.b;
    res.send(`${Number(a)+Number(b)}`)
})

app.get('/minus', (req, res)=>{
    console.log('Get test');
    const a = req.query.a;
    const b = req.query.b;
    res.send(`${Number(a)-Number(b)}`)
})

app.get('/multiply', (req, res)=>{
    console.log('Get test');
    const a = req.query.a;
    const b = req.query.b;
    res.send(`${Number(a)*Number(b)}`)
})

app.get('/divide', (req, res)=>{
    console.log('Get test');
    const a = req.query.a;
    const b = req.query.b;
    res.send(`${Number(a)/Number(b)}`)
})

app.listen(port, ()=>{
    console.log(`Server On! ${port}`);
});