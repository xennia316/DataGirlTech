const express = require('express');

const app = express();

app.listen(8080, () => {
    console.log("Server started successfully....");
})

app.use(express.static(__dirname));

app.get("/", (req,res) => {
    res.sendFile(__dirname + '/index.html' )                                                   ;
}); 