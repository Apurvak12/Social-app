const mongoose = require("mongoose");
const { Schema } = mongoose;
const CommentSchema = new Schema({
  title: {
    type: String,
  },
  comments:{
    type:String,
  },
  postId:{
         type: Schema.ObjectId,
         ref:'Post',
         required:true
    }
});
const Comments = mongoose.model("Comment", CommentSchema);
module.exports={
    Comments
}