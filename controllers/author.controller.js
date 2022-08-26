const Author = require('../models/Author.model');
module.exports.authorcontroller={
   createAuthor: async function(req, res) {
   try{
    await Author.create({
   name: req.body.name, 
   information:req.body.information,
    });
    res.json("Автор добавлен");
   }catch(error){
    console.log('Ошибка при добавлении автора')
   }
  
    
  },
  deleteAuthorById: async function(req,res){
    try{
         const author = await Author.findByIdAndRemove(req.params.id)
    res.json("Автор удалена");
    }catch(error){

        console.log('Ошибка при удалении автора')
    }
   
},
changeAuthorById:async function(req, res){
    try{
        const book = await Author.findByIdAndUpdate(req.params.id,{
   name: req.body.name, 
   information: req.body.information,
   
        })
    res.json('Автор изменен')
    }catch(error){
        console.log('Ошибка при изменении автора')
    }
    
},
getAuthorById: async(req, res)=>{
    try{
         const author = await Author.findById(req.params.id)
    res.json(author);
    }catch(error){
        console.log('Ошибка при получении автора')
    }
   
},
 
getAuthors: async(req, res)=>{
    try{
    const author = await Author.find();
    res.json(author);
    }catch(error){
        console.log('Ошибка при получении авторов')
    }
   
}
}