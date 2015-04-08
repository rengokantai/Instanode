/**
 * Created by Hernan Y.Ke on 4/7/15.
 */
var express=require('express');
var app=express();
var instagram=require('instagram-node').instagram();


app.use(express.static(__dirname + '/public'));

app.set('view engine','ejs');


instagram.use({
    client_id:'e20bb5f5169f41e49e9161054e20b02d',
    client_secret:'f16a448782d74a72999e681f0fecbaa8'
});



app.get('/',function(req,res){
    instagram.media_popular(function(err,medias,remaininglimit){
        res.render('pages/index',{grams:medias})
    })
})

app.listen(8080,function(err){
    if(err){
        console.log("Error");
    } else {
        console.log("Listening 8080");
    }
});