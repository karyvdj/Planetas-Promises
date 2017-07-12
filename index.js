var express = require('express');
var path = require('path');
var app = express();

app.get("/", function (req, res) {
  res.sendFile(__dirname +'/index.html');
});

app.use("/static",express.static(path.join(__dirname,"data")));
app.listen(1234);
