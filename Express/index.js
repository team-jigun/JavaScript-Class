const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/plus', (req, res) => {
    const plus = Number(req.query.a) + Number(req.query.b)

    res.send(`${plus}`)
    
});

app.get('/minus', (req, res) => {
   const minus = Number(req.query.a) - Number(req.query.b)
   
   res.send(`${minus}`)

});

app.listen([port, _ => {
    console.log(`Server On! ${port}`);
}])                                         



