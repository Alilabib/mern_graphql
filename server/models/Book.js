const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    name:String,
    genre:String,
    authorId:String
},{timestamps:{created_at:'created_at'}});

const Book = mongoose.model('Book',bookSchema);

module.exports = {
    Book
}