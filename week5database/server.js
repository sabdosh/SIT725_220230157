const express = require('express');
const path = require('path');
const mongoose = require('mongoose'); 

const app = express();
const PORT = 3000;

const MONGO_URI = 'mongodb://localhost:27017/sit725_books';

mongoose
  .connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.use(express.static(path.join(__dirname, 'public')));

const booksRoute = require('./routes/books.routes');
app.use('/api/books', booksRoute);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
