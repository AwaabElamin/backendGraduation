const bcrypt = require('bcrypt');
const borrowsModel = require('../models/borrows');

exports.create = async (req, res) => {
    const borrow = {
        'book.id': req.body.book_id
        , 'book.name': req.body.book_name
        , 'book.price': req.body.book_price
        , 'user.id': req.body.user_id
        , 'user.name': req.body.username
        , 'user.email': req.body.user_email
        , borrowDate: req.body.borrowDate
        , borrowReturn: req.body.borrowReturn
        , actualReturnDate: req.body.actualReturnDate
        , penalty: req.body.penalty
    }
    const borrowAdded = await borrowsModel.create(borrow);
    console.log('add borrow', borrowAdded);
    res.send(borrowAdded);
}
exports.getAll = async (req, res) => {
    const borrows = await borrowsModel.findAll();
    res.send(borrows);
}
exports.readById = async (req, res) => {
    const id = req.params.id;
    const borrow = await borrowsModel.findById(id);
    res.send(borrow);
}
exports.update = async (req, res) => {
    const borrow = {
        'book.id': req.body.book_id
        , 'book.name': req.body.book_name
        , 'book.price': req.body.book_price
        , 'user.id': req.body.user_id
        , 'user.name': req.body.username
        , 'user.email': req.body.user_email
        , borrowDate: req.body.borrowDate
        , borrowReturn: req.body.borrowReturn
        , actualReturnDate: req.body.actualReturnDate
        , penalty: req.body.penalty
    }
    const updatedBorrow = await borrowsModel.findAndUpdate(req.body.id, user);

    res.send(updatedBorrow);
}
exports.delete = async (req, res) => {
    const id = req.query.id;
    const deletedBorrow = await borrowsModel.findAndDelete(id);
    console.log('deleted borrow:- ', deletedBorrow);
    res.send(deletedBorrow);
}