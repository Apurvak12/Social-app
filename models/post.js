const mongoose=require('mongoose');
const {Schema}=mongoose;
const PostSchema=new Schema({
    title:{
        type:String,
        trim:true,
        required:true,
    },
    description:{
        type:String,
        trim:true,
    },
});

const Post=mongoose.model('Post',PostSchema);

module.exports={
    Post,
}

