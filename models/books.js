const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const bookSchema = mongoose.Schema(
    {
        title: { type: String, unique: true }
        , quantity: { type: Number }
        , price: { type: Number }
        , author: {
            sbn: { type: String }
            , author_name: { type: String }
        }
    }
);
const bookModel = mongoose.model('books', bookSchema);
class bookCollection {
    static async findAll() {
        const books = await bookModel.find({});
        console.log('findAll:- ', books);
        return books;
    }
    static async findById(id) {
        try {
            const book = await bookModel.findById(id);
            console.log('findById:- ', book);
            return {status:true,data:book};
        } catch (error) {
            return { status: false, message: error }
        }

    }
    static async create(book) {
        const new_book = new bookModel(book);
        try {
            await new_book.save();
            console.log('create:- ', new_book);
            return { success: true, data: new_book };
        } catch (error) {
            if (error.code == 11000) {
                return { success: false, message: "book already exist" };
            } else {
                return { success: false, message: error };
            }
        }
    }
    static async findAndUpdate(id, book) {
        console.log('id: ', id);
        try {
            const updatedBook = await bookModel.findByIdAndUpdate(id, book);
            console.log('findAndUpdate:- ', updatedBook);
            return { success: true, data: updatedBook };
        } catch (error) {
            return { success: false, message: error };

        }
    }
    static async findAndDelete(id) {
        try {
            const deletedBook = await bookModel.findByIdAndDelete(id);
            console.log('findAndDelete:- ', deletedBook);
            return { success: true, data: deletedBook };
        } catch (error) {
            return { success: false, message: error };
        }

    }
}
module.exports = bookCollection;