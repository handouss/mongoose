const mongoose=require('mongoose')


const postSchema=mongoose.Schema({
    title:{
         type:String, 
         required: true
        },
    image:String 
       ,
    desc:{
        type: String,
        required:true
       },
    createdAt: {
        type: Date,
        default: Date.now()
       },
       owner:{
        type:mongoose.Types.ObjectId,
        ref:'user'
       }
    
})
module.exports=mongoose.model('post',postSchema)