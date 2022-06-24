const bcrypt = require('bcrypt');
const booksModel = require('../models/books');

exports.create = async (req,res) => {
    const book = {
        title : req.body.title
        ,quantity : req.body.quantity
        ,'author.author_name' : req.body.author_name
        ,price: req.body.price
        ,'author.sbn': req.body.sbn 
    }
    const bookAdded = await booksModel.create(book);
    console.log('add book', bookAdded);
    res.send( bookAdded);
}
exports.getAll = async(req,res)=>{
    const books = await booksModel.findAll();
    res.send(books);
}
exports.readById = async (req,res) => {
    const id = req.params.id;
    const book = await booksModel.findById(id);
    res.send(book);
}
exports.update = async (req,res) => {
    const book = {
        title : req.body.title
        ,quantity : req.body.quantity
        ,author_name : req.body.author_name
        ,price: req.body.price
    }
    const updatedBook = await booksModel.findAndUpdate(req.body.id,book)
    res.send(updatedBook);
}
exports.delete = async (req,res) => {
    const id = req.query.id;
    const deletedBook = await booksModel.findAndDelete(id);
    console.log('deleted book:- ', deletedBook);
    res.send(deletedBook);
}
