const mongoose = require("mongoose");
const { Schema } = mongoose;
const CommentSchema = new Schema({
  name: {
    type: String,
  },
 comment:{
    type: String,
 },
});
const Comments = mongoose.model("Comment", CommentSchema);
module.exports={
    Comments
}