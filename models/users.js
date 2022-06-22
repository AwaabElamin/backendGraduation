const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const userSchema = mongoose.Schema(
    {
        username: { type: String, unique:true },
        password: {type: String},
        email:{type:String},
        phone:{type:String},
        role: {type: String},
        address: {type:String}
    }
);
const userModel = mongoose.model('users', userSchema);
class UserCollection {
    static async findAll(){
        const users = await userModel.find({});
        console.log('findAll:- ', users);
        return users;
    }
    static async findById(id){
        const user = await userModel.findById(id);
        console.log('findById:- ', user);
        return user;
    }
    static async create(user){
        const new_user = new userModel(user);
        await new_user.save();
        console.log('create:- ', new_user);
        return new_user;
    }
    static async findAndUpdate(id,user){
        const updatedUser = await userModel.findByIdAndUpdate(id,user);
        console.log('findAndUpdate:- ', updatedUser);
        return updatedUser;
    }
    static async findAndDelete(id){
        const deltedUser = await userModel.findByIdAndDelete(id);
        console.log('findAndDelete:- ', deltedUser);
        return deltedUser;
    }

    //for login perpose
    static async findByUserName(username){
        const foundedUser = await userModel.findOne({username:username});
        console.log('find user by username:- ', foundedUser);
        return foundedUser;
    }
}
module.exports = UserCollection;