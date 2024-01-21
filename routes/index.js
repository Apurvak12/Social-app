const router=require('express').Router();
const PostRoutes=require('./post');
router.use('/post',PostRoutes);

module.exports=router;