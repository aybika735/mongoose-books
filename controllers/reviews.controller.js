const Review = require('../models/Review.model');

module.exports.reviewscontroller={
   createGenre: async function(req, res) {
   try{
    await Review.create({
       text: req.body.text,
       name: req.body.name,
       book:req.body.book,
    });
    res.json("Рецензия добавлена");
   }catch(error){
    console.log('Ошибка при добавлении рецензии')
   }
  
    
  },
  deleteReviewById: async function(req,res){
    try{
         const review = await Review.findByIdAndRemove(req.params.id)
    res.json("Рецензия удалена");
    }catch(error){

        console.log('Ошибка при удалении рецензии')
    }
   
},

getReviewByBook: async(req, res)=>{
    try{
    const reviews = await Book.find({book: req.params.id});
    res.json(reviews);
    }catch(error){
        console.log('Ошибка при получении рецензий');
    }
   
}
}