const Book = require('../models/Book.model');
module.exports.bookscontroller={
   createBook: async function(req, res) {
   try{
    await Book.create({
   name: req.body.name, 
   author: req.body.author,
   genre: req.body.genre,
    });
    res.json("Книга добавлена");
   }catch(error){
    console.log('Ошибка при добавлении книги')
   }
  
    
  },
  deleteBookById: async function(req,res){
    try{
         const book = await Book.findByIdAndRemove(req.params.id)
    res.json("Книга удалена");
    }catch(error){

        console.log('Ошибка при удалении книги')
    }
   
},
changeBookById:async function(req, res){
    try{
        const book = await Book.findByIdAndUpdate(req.params.id,{
   name: req.body.name, 
   author: req.body.author,
   genre: req.body.genre 
        })
    res.json('Книга изменена')
    }catch(error){
        console.log('Ошибка при изменении книги')
    }
    
},
getBookById: async(req, res)=>{
    try{
         const book = await Book.findById(req.params.id).populate('genre')
    res.json(book);
    }catch(error){
        console.log('Ошибка при получении книги')
    }
   
},
 
getBooks: async(req, res)=>{
    try{
    const books = await Book.find();
    res.json(books);
    }catch(error){
        console.log('Ошибка при получении книг')
    }
   
},
getBooksByGenre: async(req, res)=>{
    try{
    const books = await Book.find({genre: req.params.id});
    res.json(books);
    }catch(error){
        console.log('Ошибка при получении книг');
    }
   
}
}