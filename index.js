const express = require('express');
const app = express();

app.get("/",function(request,responce){
    console.log(request);
    responce.send('Hello');
})

app.listen(3000, function(){
    console.log('Server started on PORT 3000');
});