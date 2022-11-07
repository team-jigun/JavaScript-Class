const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, _ => {
    console.log('WakHi');
});


// a + b
app.get('/add', (req, res) => {
    const query = Number(req.query.a) + Number(req.query.b);
    if (isNaN(query)) {
        res.send("Data type of a or b isn't Number!");
    } else {
        res.send(`The result is ${query}`);
    }
});

// add(a, b)
app.get('/plus', (req, res) => {
    res.redirect(`/add?a=${req.query.a}&b=${req.query.b}`);
});


// a - b
app.get('/subtract', (req, res) => {
    const query = Number(req.query.a) - Number(req.query.b);
    if (isNaN(query)) {
        res.send("Data type of a or b isn't Number!");
    } else {
        res.send(`The result is ${query}`);
    }
});

// subtract(a, b)
app.get('/minus', (req, res) => {
    res.redirect(`/subtract?a=${req.query.a}&b=${req.query.b}`);
});


// a × b
app.get('/multiply', (req, res) => {
    const query = Number(req.query.a) * Number(req.query.b);
    if (isNaN(query)) {
        res.send("Data type of a or b isn't Number!");
    } else {
        res.send(`The result is ${query}`);
    }
});

// multiply(a, b)
app.get('/multiple', (req, res) => {
    res.redirect(`/multiply?a=${req.query.a}&b=${req.query.b}`);
});


// a ÷ b
app.get('/divide', (req, res) => {
    const query = Number(req.query.a) / Number(req.query.b);
    if (isNaN(query)) {
        res.send("Data type of a or b isn't Number!");
    } else {
        res.send(`The result is ${query}`);
    }
});

// divide(a, b)
app.get('/division', (req, res) => {
    res.redirect(`/divide?a=${req.query.a}&b=${req.query.b}`);
});


// a²
app.get('/square', (req, res) => {
    const query = Number(req.query.a);
    if (isNaN(query)) {
        res.send("Data type of a or b isn't Number!");
    } else {
        res.send(`The result is ${query * query}`);
    }
});


// √a
app.get('/root', (req, res) => {
    const query = Number(req.query.a);
    if (isNaN(query)) {
        res.send("Data type of a or b isn't Number!");
    } else {
        res.send(`The result is ${Math.sqrt(query)}`);
    }
});