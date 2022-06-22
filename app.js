const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


const usersRouter = require('./routes/users');
const connection =`mongodb+srv://root:123@cluster0.wpzy5.mongodb.net/Maharishi?retryWrites=true&w=majority`;

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

app.use('/users', usersRouter);


app.listen(3000, console.log('Listening on 3000...'))