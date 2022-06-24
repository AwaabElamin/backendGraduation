const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const borrowSchema = mongoose.Schema(
    {
        book: {
            id: { type: String }
            , name: { type: String }
            , price: { type: number }
        }
        , user: {
            id: { type: String }
            , name: { type: String }
            , email: { type: String }
        }
        , borrowDate: { type: String }
        , borrowReturn: { type: String }
        , actualReturnDate: { type: String }
        , penalty: { type: number } //$10 for each day late
    }
);
const borrowModel = mongoose.model('borrows', borrowSchema);
class borrowCollection {
    static async findAll() {
        const borrows = await borrowModel.find({});
        console.log('findAll:- ', borrows);
        return borrows;
    }
    static async findById(id) {
        const borrow = await borrowModel.findById(id);
        console.log('findById:- ', borrow);
        return borrow;
    }
    static async create(borrow) {
        const new_borrow = new borrowModel(borrow);
        try {
            await new_borrow.save();
            console.log('create:- ', new_borrow);
            return { success: true, data: new_borrow };
        } catch (error) {
            if (error.code == 11000) {
                return { success: false, message: "borrow already exist" };
            } else {
                return { success: false, message: error };
            }
        }

    }
    static async findAndUpdate(id, user) {
        console.log('id: ', id);
        try {
            const updatedBorrow = await borrowModel.findByIdAndUpdate(id, user);
            console.log('findAndUpdate:- ', updatedBorrow);
            return { success: true, data: updatedBorrow };
        } catch (error) {
            return { success: false, message: error };

        }
    }
    
    static async findAndDelete(id) {
        try {
            const deltedBorrow = await borrowModel.findByIdAndDelete(id);
            console.log('findAndDelete:- ', deltedBorrow);
            return { success: true, data: deltedBorrow };
        } catch (error) {
            return { success: false, message: error };
        }

    }
}
module.exports = borrowCollection;