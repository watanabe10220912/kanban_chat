const express = require("express");
const app = express();
const port = process.env.port || 3000;
const fs = require('fs');
const path = require('path');

app.listen(port ,_=> {
    console.log(' 😄 server listening on port ' + port)
    //console.log(__dirname);
    //console.log(path.resolve(__dirname,'../dist/js'))
});

app.use('/js', express.static(path.resolve(__dirname,'../dist/js')));
app.get('/test',(req,res)=>{

    //res.writeHead(200, {'Content-Type': 'text/html'});
    //fs.readFile('./dist/index.html','utf-8',(err,data)=>{
        //console.log(data);
        //res.send(data);
    //});
    //console.log(resfile);
    res.sendFile(path.resolve(__dirname,'../dist/index.html'));
})