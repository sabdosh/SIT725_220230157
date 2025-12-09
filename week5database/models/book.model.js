const mongoose = require('mongoose');

const { Schema } = mongoose;

const bookSchema = new Schema({
  id: { type: String, required: true, unique: true }, 
  title: { type: String, required: true },
  author: { type: String, required: true },
  year: { type: Number, required: true },
  genre: { type: String, required: true },
  summary: { type: String, required: true },
  price: { type: Schema.Types.Decimal128, required: true } 
});

module.exports = mongoose.model('Book', bookSchema);
