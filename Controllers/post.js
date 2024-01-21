const getPosts=(req,res)=>{
    try{
       res.send('Post list')
    }catch(error){
       res.send('Opps, something went wrong!!')
    }
};

module.exports={
    getPosts,
};