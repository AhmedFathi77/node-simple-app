const express = require('express');
const route   = express.Router();
const user   = require('../models/user');


route.post('/create-user' , async(req , res)=>{
    try{
        const data = await new user(req.body);
        await data.save();
        res.status(200).send({
            status:'success',
            data:req.body
        });
    }catch(err){
        res.status(400).send({
            status:'Error',
            Error: err
        });
    }
})

route.get('/get-users' , async(req , res)=>{
    try{
        const data = await user.find({});
        res.status(200).send({
            status:'success',
            data: data
        });
    }catch(err){
        res.status(400).send({
            status:'Error',
            Error: err
        });
    }
})


module.exports = route;