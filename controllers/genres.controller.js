const Genre = require('../models/Genre.model');

module.exports.genrescontroller={
   createGenre: async function(req, res) {
   try{
    await Genre.create({
        name: req.body.name,
        information: req.body.information
    });
    res.json("Жанр добавлен");
   }catch(error){
    console.log('Ошибка при добавлении жанра')
   }
  
    
  },
  deleteGenreById: async function(req,res){
    try{
         const genre = await Genre.findByIdAndRemove(req.params.id)
    res.json("Жанр удален");
    }catch(error){

        console.log('Ошибка при удалении жанра')
    }
   
},

getGenres: async(req, res)=>{
    try{
         const genres = await Genre.find()
    res.json(genres);
    }catch(error){
        console.log('Ошибка при получении жанров')
    }
   
}
}