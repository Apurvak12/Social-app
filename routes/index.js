const router=require('express').Router();
const PostRoutes=require('./post');
const CommentRoute=require('./comments');
router.use('/post',PostRoutes);
router.use('/comments',CommentRoute);
module.exports=router;