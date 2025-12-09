const booksService = require('../services/books.service');

async function getAllBooks(req, res, next) {
  try {
    const items = await booksService.getAllBooks();s

    res.status(200).json({
      statusCode: 200,
      data: items,
      message: 'Books catalog retrieved successfully'
    });
  } catch (err) {
    next(err);
  }
}

async function getBookById(req, res, next) {
  try {
    const id = req.params.id;
    const book = await booksService.getBookById(id);

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
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getAllBooks,
  getBookById
};
