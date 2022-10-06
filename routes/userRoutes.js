const express= require('express');
 const router = express.Router();
const user=require('../models/userModel');

router.post('/',(req,res)=>{
                            user.create(req.body)
                            .then(response=>res.json(response))
                            .catch((err)=>res.status(500).json(err))
                            })

router.get('/',(req,res)=>{
                            user.find()
                            .then(response=>res.json(response))
                            .catch((err)=>res.status(500).json(err))
                              })

router.get('/:id',(req,res)=>{
        user.find({_id:req.params.id})
        .then(response=>res.json(response))
        .catch((err)=>res.status(500).json(err))
                        })

router.get('/',(req,res)=>{
        user.find({favoriteFoods:{$contains:"3ssida"}})
        .then(response=>res.json(response))
        .catch((err)=>res.status(500).json(err))
                        })

router.delete('/:id',(req,res)=>{
    user.findByIdAndDelete(req.params.id)
    .then(()=>res.json({msg:'user deletedd'}))
    .catch((err)=>res.status(500).json(err))
                    })

router.put('/:id',(req,res)=>{
    user.findByIdAndUpdate(req.params.id,req.body,{new :true})
    .then(response=>res.json(response))
    .catch((err)=>res.status(500).json(err))
                    })




 module.exports=router;