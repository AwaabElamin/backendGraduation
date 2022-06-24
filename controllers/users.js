const bcrypt = require('bcrypt');
const usersModel = require('../models/users');

exports.create = async (req, res) => {
    const user = {
        username: req.body.username
        , password: bcrypt.hashSync(req.body.password, 8)
        , role: "user"
        , email: req.body.email
        , phone: req.body.phone
        , address: req.body.address
    }
    const userAdded = await usersModel.create(user);
    console.log('add user', userAdded);
    res.send(userAdded);
}
exports.getAll = async (req, res) => {
    const users = await usersModel.findAll();
    res.send(users);
}
exports.readById = async (req, res) => {
    const id = req.params.id;
    const user = await usersModel.findById(id);
    res.send(user);
}
exports.update = async (req, res) => {
    const user = {
        username: req.body.username
        , password: bcrypt.hashSync(req.body.password, 8)
        , email: req.body.email
        , phone: req.body.phone
        , address: req.body.address
    }
    const updatedUser = await usersModel.findAndUpdate(req.body.id, user);

    res.send(updatedUser);
}
exports.updateRole = async (req, res) => {
    const updatedUser = await usersModel.findAndUpdateRole(req.body.email, req.body.role)
    // console.log('update role: ', updatedUser)
    res.send(updatedUser);
}
exports.delete = async (req, res) => {
    const id = req.query.id;
    const deletedUser = await usersModel.findAndDelete(id);
    console.log('deleted user:- ', deletedUser);
    res.send(deletedUser);
}

//card
exports.addBookToCard = async (req, res) => {
    const bookDetail = {
        bookTitle: req.body.book_title
        , bookPrice: req.body.book_price
    }
    const addedBook = await usersModel.addBookToCard(req.body.user_email, bookDetail);
    res.send(addedBook);
}
exports.getAllCard = async (req, res) => {
    const card = await usersModel.getAllCard(req.body.user_email);
    res.send(card);
}
exports.getAllCard = async (req, res) => {
    const card = await usersModel.getAllCard(req.body.user_email);
    res.send(card);
}
exports.deleteBookFromCard = async (req, res) => {
    const card = await usersModel.deleteBookfromCard(req.body.user_email,req.body.book_id);
    res.send(card);
}
