const express = require('express')
const app = express()
const fs = require('fs');

const PORT = process.env.PORT || 3000;

app.get("/", (req,res) => {
    fs.readFile('index.html',(err,data)=>{
        if (err) console.log(err);
        res.render(data);   
    });
});

app.listen(PORT, () => console.log(`The server is listening on port ${PORT}`));