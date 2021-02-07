const express = require('express');
const app = express();

app.use((req,res,next)=>{
next()
});
app.get('/',(req,res)=>{
res.send('我是主页')
});

app.listen(3000,(err)=>{
    if(!err){
        console.log('ok')
    }else{
        console.log(err)
    }
});