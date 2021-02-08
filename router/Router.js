const{Router} =  require('express');

let router = new Router();


let usersModel = require('../model/usersModel')

router.get('/',(req,res)=>{
    res.send('ok')

});

router.post('/reg',(req,res)=>{

    const {username,password,repass} = req.body
    usersModel.findOne({username},function(err,data){
        if (data){
            console.log(`${username}已被占用！`)
            res.send('用户名已被占用！')
        }else{
            usersModel.create({username,password},function(err){
                if(!err){
                    console.log(`${username}注册成功！`)
                    res.send('注册成功')
                }else{
                    console.log(err)
                    res.send('注册失败')
                }
            })
        }
    })

});

router.post('/login',(req,res)=>{

    const {username,password} = req.body;


    usersModel.findOne({username,password},(err,data)=>{
        if(err){
            console.log(err)
            res.send('登录失败')
            return
        }
        if(data){
            res.send('登录成功')
            return
        }
        res.send('用户名或密码错误')
    })

});




module.exports = router