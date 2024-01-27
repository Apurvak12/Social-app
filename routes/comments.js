const express = require("express");
const router = express.Router();

const CommentController = require("../Controllers/comments");

router.get('/',CommentController.getComments);
router.post('/',CommentController.addComments);
 

module.exports = router;