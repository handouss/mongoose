const express= require('express');
 const router = express.Router();
const post = require('../models/postModel')


 router.post('/',(req,res)=>{
    post.create(req.body)
    .then(response=>res.json(response))
    .catch((err)=>res.status(500).json(err))
    })

    router.get('/',(req,res)=>{
        post.find().populate('owner','+ fname')
        .then(response=>res.json(response))
        .catch((err)=>res.status(500).json(err))
          })









module.exports=router;