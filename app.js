var express = require("express");

var app = express();

var library = [];
var id = 1;

app.set("view engine", "ejs");

app.get('/', function(req,res){

	console.log('hello')
	res.render('index',{library:library});

})

app.get('/create_book', function(req,res){

var book = {};
book.bookTitle = req.query.bookTitle;
book.bookAuthor = req.query.bookGenre;
book.bookYear = req.query.bookYear;
book.id = id;
id++;
library.push(book);

res.redirect('/');


})


app.get('/read_book/:id', function(req,res){

	library.forEach(function(book){
  	if(book.id === Number(req.params.id)){
  		var book = book; 	
  		res.render("show", {book: book});
  	}
  })

})

app.get('update_book', function(req,res){
//todo : implement the update book 
})

app.get('delete_book', function(req,res){
//todo : implement the delete book
})

app.listen(3000,function(){
	console.log('on the moon!')
})


