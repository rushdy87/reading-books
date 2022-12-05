import { useEffect, useContext } from 'react';

import { BooksContext } from './context/books';

import BookCreate from './components/book-create/BookCreate';
import BookList from './components/book-list/BookList';

const App = () => {
  const { fetchBooks } = useContext(BooksContext);
  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
};

export default App;
