var express = require("express");

var app = express();

var bodyParser = require('body-parser');
var methodOverride = require('method-override');
app.use(methodOverride('_method'));
app.use(bodyParser());

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
book.bookAuthor = req.query.bookAuthor;
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

app.put('/update_book/:id', function(req,res){

console.log('trying to update')
	library.forEach(function(book){
  	if(book.id === Number(req.params.id)){
  		 	
  		book.bookTitle = req.body.bookTitle;
  		book.bookAuthor = req.body.bookAuthor;
  		book.bookYear = req.body.bookYear;
  	
  	
  	}
  })
res.redirect("/")
})

app.delete('/delete_book/:id', function(req, res) {
	library.forEach(function(book){
		if (book.id === Number(req.params.id)) {
			var index = library.indexOf(book)
			library.splice(index,1);
		}
	})
	res.redirect("/")
})


app.listen(3000,function(){
	console.log('on the moon!')
})


