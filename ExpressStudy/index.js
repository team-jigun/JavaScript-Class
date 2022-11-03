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
    const plusQuery = req.query.num;
    const arr = [];
    let addupNum = 0;

    for(let index of plusQuery) {
        arr.push(index);
    };

    let addedNum = parseInt(arr[0]);
    
    for(let i = 0;  i < arr.length; i++) {
        addupNum = parseInt(arr[i] === arr[0] ? 0 : arr[i]);
        
        addedNum += addupNum;
    };
    res.send(String(addedNum));
});

// http://localhost:3000/all?num=6666&num=2222&num=3333&type=minus
app.get("/all", (req, res) => {
    const nums = req.query.num;
    const type = req.query.type;
    const arr = [];
    let num = 0;

    for(let index of nums) {
        arr.push(index);
    };

    let target = parseInt(arr[0]);


    for(let i = 0;  i < arr.length; i++) {
        num = parseInt(arr[i] === arr[0] ? 0 : arr[i]);
                
        switch(type) {
            case SIGN_TYPE.PLUS:  target += num; break;
            case SIGN_TYPE.MINUS: target -= num; break;
            case SIGN_TYPE.MULTIPLY: target *= num;  break;
            case SIGN_TYPE.DIVISION: target /= num; break;
    
            default: throw Error("타입이 존재하지 않습니다.");
        };
    };


    res.send(String(target));
});

app.listen(port, () => {
    console.log(port);
});