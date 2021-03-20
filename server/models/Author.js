const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = new Schema({
    name:String,
    age:String
},{timestamps:{created_at:'created_at'}});

const Author = mongoose.model('Author',authorSchema);

module.exports = {
    Author
}