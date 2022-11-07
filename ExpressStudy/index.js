const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

const SIGN_TYPE = {
    PLUS: "plus",
    MINUS: "minus",
    MULTIPLY: "multiply",
    DIVISION: "division",
};

// http://localhost:3000/plus?num=1111&num=2222&num=3333&num=4444
app.get("/plus", (req, res) => {
    const numQuery = req.query.num;
    if(!numQuery) {
        res.send("Error");
    };

    let addedNum = parseInt(numQuery[0]);

    for (let i = 1; i < numQuery.length; i++) {
        const addupNum = parseInt(i === numQuery ? 0 : numQuery[i]);
        addedNum += addupNum;
    };
    res.send(String(addedNum));
});

// http://localhost:3000/all?num=6666&num=2222&num=3333&type=minus
app.get("/all", (req, res) => {
    const numQuery = req.query.num;
    const type = req.query.type;
    if((!numQuery || !type) || (type !== SIGN_TYPE.PLUS && type !== SIGN_TYPE.MINUS && type !== SIGN_TYPE.MULTIPLY && type !== SIGN_TYPE.DIVISION)) {
        res.send(`Error ${type}이 없습니다.`);
    };

    let addedNum = parseInt(numQuery[0]);

    for (let i = 1; i < numQuery.length; i++) {
        const addupNum = parseInt(i === numQuery ? 0 : numQuery[i]);

        switch (type) {
            case SIGN_TYPE.PLUS:
                addedNum += addupNum;
                break;
            case SIGN_TYPE.MINUS: 
                addedNum -= addupNum; 
                break;
            case SIGN_TYPE.MULTIPLY: 
                addedNum *= addupNum; 
                break;
            case SIGN_TYPE.DIVISION: 
                addedNum /= addupNum; 
                break;
            default: addedNum;
        };
    };

    res.send(String(addedNum));
});

app.listen(port, () => {
    console.log(port);
});