const express = require('express');
const app = express();

app.get("/",function(request,responce){
    /* console.log(request);
    responce.send('Hello'); */
    res.send('<h1>hello?</h1>');
})

app.listen(3000, function(){
    console.log('Server started on PORT 3000');
});