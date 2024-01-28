const router=require('express').Router();
const PostController=require('../Controllers/post');
const CommentRoute=require('./comments');
router.get('/',PostController.getPosts);
router.post('/',PostController.addPost);
router.delete('/:id',PostController.deletePost);
router.put('/:id',PostController.putPost);
router.use('/:postId/comments',CommentRoute);
module.exports=router;