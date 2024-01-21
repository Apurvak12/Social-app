const {Post}=require('../models/post');

const getPosts=async(req,res)=>{
    try{
        
        const data=await Post.find();
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
       message:'delete successfully'
    });
    }
}


module.exports={
    getPosts,
    addPost,
    deletePost,
};