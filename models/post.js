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

postId:{
    type: Schema.Types.ObjectId,
    ref:'Comments',
}
});


const Post=mongoose.model('Post',PostSchema);

module.exports={
    Post,
}

