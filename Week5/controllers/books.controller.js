// controllers/books.controller.js
const booksService = require('../services/books.service');

// GET /api/books
function getAllBooks(req, res) {
  const items = booksService.getAllBooks();

  res.status(200).json({
    statusCode: 200,
    data: items,
    message: 'Books catalog retrieved successfully'
  });
}

// GET /api/books/:id
function getBookById(req, res) {
  const id = req.params.id;
  const book = booksService.getBookById(id);

  if (!book) {
    return res.status(404).json({
      statusCode: 404,
      message: 'Book with id ' + id + ' not found'
    });
  }

  res.status(200).json({
    statusCode: 200,
    data: book,
    message: 'Book retrieved successfully'
  });
}

module.exports = {
  getAllBooks: getAllBooks,
  getBookById: getBookById
};
