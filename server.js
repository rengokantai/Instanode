/**
 * Created by Hernan Y.Ke on 4/7/15.
 */
var express=require("express");
var app=express();
var instagram=require("instagram-node").instagram();


app.use(express.static(__dirname + '/public'));

app.set('view engine','ejs');


app.listen(8080,function(err){
    if(err){
        console.log("Error");
    } else {
        console.log("Listening 8080");
    }
});