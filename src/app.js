const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const template_path = path.join(__dirname,"../templates/views");
const static_path = path.join(__dirname,"../public");
const partial_path = path.join(__dirname,"../templates/partials"); 
app.set('view engine', 'hbs');
app.set('views',template_path);
hbs.registerPartials(partial_path);
app.use(express.static(static_path));

app.get("",(req,res)=>{
    res.render("index");
});
app.get("/about",(req,res)=>{
    res.render("about");
});
app.get("/weather",(req,res)=>{
    res.render("weather");
});
app.get("*",(req,res)=>{
    res.render("404",{
        meg:"oops"
    });
});
app.listen(8000,()=>{
console.log("listiong on 8000");
});