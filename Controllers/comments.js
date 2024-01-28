const {Comments}=require('../models/comments');
const getComments = async (req, res) => {
  try {
    const query={
      postId:req.params.postId,
    };
    console.log(query);
    const data = await Comments.find(query);
    res.send({ data: data });
  } catch (error) {
    res.send("oops");
  }
};

const addComments = async (req, res) => {
  try {
    req.body.postId = req.params.postId;
    console.log(req.body)
    let data = await Comments.create(req.body);
    res.send({ data: data });
  } catch (error) {
    console.log(error);
    res.send("oops");
  }
};
const deleteComments=async(req,res)=>{
    try{
    const existingPost=await Comments.findById(req.params.id);
    if(!existingPost){
        return res.status(401),send({message:'no post found'});
    }
    await Comments.deleteOne({_id:req.params.id});
res.send({
        message:'delete successfully'
    });
    }catch(error){
res.send({
       message:'not delete successfully'
    });
    }
}

const putComments=async(req,res)=>{
    try{
          let existingData=await Comments.findById(req.params.id);
          if(!existingData){
           return res.send('No data with this id');
          }
       console.log('Exsiting data',existingData);
         const result=await Comments.updateOne(
            ({_id:req.params.id}),
            req.body
          );
           console.log('Result',result);
       return res.send({message:'updated'});
    }catch(error){
         console.log('Error',error);
        res.send('opps,something went wrong');
    }
};
module.exports={
    getComments,
    addComments,
    deleteComments,
    putComments
}