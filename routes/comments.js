const router = require("express").Router({mergeParams:true});

const CommentController = require("../Controllers/comments");

router.get('/',CommentController.getComments);
router.post('/',CommentController.addComments);
router.delete('/:id',CommentController.deleteComments);
router.put('/:id',CommentController.putComments);

module.exports = router;