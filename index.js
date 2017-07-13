var express = require("express");
var app = express();

app.use("/data", express.static(__dirname + '/data')); //carpeta data que contiene el JSON
app.use("/static", express.static(__dirname + "/node_modules"));
app.use("/static", express.static(__dirname + "/assets"));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html")
})

app.listen(1234); //servidor en este puerto
