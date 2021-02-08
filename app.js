//引入express
const express = require('express');
//创建app应用对象
const app = express();
//禁止服务器返回X-Powered-By,为了安全
app.disable('x-powered-by')
//引入db模块，用于连接数据库
const db =require('./db/db')
//使用内置中间件用于解析post请求的urlencoded参数
app.use(express.urlencoded({extended:true}))
//引入登录注册路由器
const Router = require('./router/Router')
//逻辑：如果数据库连接成功，随后立即启动服务器，在整个过程中，无论多少次请求，数据库只连接一次。
db(()=>{
    app.use(Router)

    app.listen(3000,(err)=>{
        if(!err){
            console.log('服务器启动成功！')
        }else{
            console.log('服务器启动失败！',err)
        }
    });
},(err)=>{
    console.log('数据库连接失败!',err)
})



