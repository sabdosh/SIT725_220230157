const Book = require('../models/book.model');

async function getAllBooks() {
  return await Book.find().sort({ id: 1 }).lean();
}

async function getBookById(id) {
  return await Book.findOne({ id }).lean();
}

module.exports = {
  getAllBooks,
  getBookById
};
