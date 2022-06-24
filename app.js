const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();


const usersRouter = require('./routes/users');
const cardRouter = require('./routes/card');
const autherizeRouter = require('./routes/auth');
const booksRouter = require('./routes/books');
const connection =`mongodb+srv://${process.env.dbUserName}:${process.env.dbPassword}@cluster0.wpzy5.mongodb.net/${process.env.dbName}?retryWrites=true&w=majority`;

const app = express();

mongoose.connect(connection,err => {
    if (err) {
        console.log('Error: ', err)
    } else {
        console.log("DB connected")
    }
})

app.use(express.json());
app.use(cors());

app.use('',autherizeRouter);
app.use('/users', usersRouter);
app.use('/card', cardRouter);
app.use('/books', booksRouter);


app.listen(3000, console.log('Listening on 3000...'))