const {Comments}=require('../models/comments');
const getComments = async (req, res) => {
  try {
    const {limit=2,skip=0}=req.query;
    const sortBy={title:1};
    const data = await Comments.find().sort(sortBy).skip(skip).limit(limit);
    res.send({ data: data });
  } catch (error) {
    res.send("oops");
  }
};

const addComments = async (req, res) => {
  try {
    console.log(req.body);
    let data = await Comments.create(req.body);
    res.send({ data: data });
  } catch (error) {
    console.log(error);
    res.send("oops");
  }
};
module.exports={
    getComments,
    addComments
}