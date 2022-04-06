const express = require("express");
const https = require("https");
const request = require("request");
const bodyParser = require("body-parser");

const app = express();
app.set('view engine', 'ejs');

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}));


app.get("/",function(req,res){
  res.render("index",{test: "TEST"});
});

app.post("/",function(req,res){
  res.sendFile(__dirname + "/test.html");
});



// listening to a dinamic port (for using heroku) and on our localhost at port 3000
app.listen(process.env.PORT || 3000,function(){
  console.log("Server is running");
});


// mailChimp API key
// a68463a7095edb0b0fc6fd56c7472d4d-us14
// List ID
// 5546f78779
