const {Post}=require('../models/post');

const getPosts=async(req,res)=>{
    try{
        const {limit=10,skip=0}=req.query;
        const sortBy={title:1};
        const data=await Post.find().sort(sortBy).skip(skip).limit(limit);
       res.send(data)
    }catch(error){
        console.log(error);
       res.send('Opps, something went wrong!!')
    }
};

const addPost=async(req,res)=>{
    try{
        console.log(req.body);
   let data=await Post.create(req.body);
   res.send({
    data,
    message:'added'
   })
    }catch(error){
  console.log(error)
   res.send('Opps, something went wrong!!');
    }
}

const deletePost=async(req,res)=>{
    try{
    const existingPost=await Post.findById(req.params.id);
    if(!existingPost){
        return res.status(401),send({message:'no post found'});
    }
    await Post.deleteOne({_id:req.params.id});
res.send({
        message:'delete successfully'
    });
    }catch(error){
res.send({
       message:'not delete successfully'
    });
    }
}

const putPost=async(req,res)=>{
    try{
          let existingData=await Post.findById(req.params.id);
          if(!existingData){
           return res.send('No data with this id');
          }
       console.log('Exsiting data',existingData);
         const result=await Post.updateOne(
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
    getPosts,
    addPost,
    deletePost,
    putPost,
};