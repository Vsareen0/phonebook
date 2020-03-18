const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000;

app.get("/", (req,res) => {
    res.render('index.html');
});

app.use('/static',express.static(__dirname,'/public'));

app.listen(PORT, () => console.log(`The server is listening on port ${PORT}`));