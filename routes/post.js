const router=require('express').Router();
const PostController=require('../Controllers/post');
router.get('/',PostController.getPosts);
router.post('/',PostController.addPost);
router.delete('/:id',PostController.deletePost);
module.exports=router;