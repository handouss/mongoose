const mongoose=require('mongoose')


const userSchema=mongoose.Schema({
    fname:{
         type:String, 
         required: true
        },
    lname:{
        type:String, 
        required: true
       },
    email:{
        type:String, 
        required: true
       },
    age:Number,
    favoriteFoods:[String]
})
module.exports=mongoose.model('user',userSchema)