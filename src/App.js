import { useState } from 'react';

import BookCreate from './components/book-create/BookCreate';
import BookList from './components/book-list/BookList';

const App = () => {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    const updatedBooks = [
      ...books,
      { id: Math.floor(Math.random() * 9999), title },
    ];
    setBooks(updatedBooks);
  };

  const deleteBookById = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const editBookById = (id, title) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
};

export default App;
