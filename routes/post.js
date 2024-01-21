const router=require('express').Router();
const PostController=require('../Controllers/post');
router.get('/',PostController.getPosts);
module.exports=router;