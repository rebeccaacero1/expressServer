const express = require('express');
const app = express();

app.get("/",function(req,res){
    /* console.log(request);
    responce.send('Hello'); */
    res.send('<h1>hello??</h1>');
});

app.get("/contact",function(req,res){
    res.send('hi, please contact me: rebeccaacero1@gmail.com');
});

app.get('/about', function(req,res){
    res.send('i am rebecca team player also')
});

app.get('/hobbies',function(req,res){
    res.send(`
    <h1>Things I like doing</h1>
    <ol>
    <li>coding</li>
    <li>data science</li>
    <li>statistics</li>
    <li>linear algebra</li>
    <li>cooking</li>
    `)   
});

app.listen(3000, function(){
    console.log('Server started on PORT 3000');
});