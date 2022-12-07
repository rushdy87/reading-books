import { createContext, useState, useCallback } from 'react';
import axios from 'axios';

export const BooksContext = createContext();

export const Provider = ({ children }) => {
  const [books, setBooks] = useState([]);

  const fetchBooks = useCallback(async () => {
    const { data } = await axios.get('http://localhost:3001/books');
    setBooks(data);
  }, []);

  const createBook = async (title) => {
    const { data } = await axios.post('http://localhost:3001/books', { title });

    const updatedBooks = [...books, data];
    setBooks(updatedBooks);
  };

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    setBooks(books.filter((book) => book.id !== id));
  };

  const editBookById = async (id, title) => {
    const { data } = await axios.put(`http://localhost:3001/books/${id}`, {
      title,
    });
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...data };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const valueToShare = {
    books,
    deleteBookById,
    editBookById,
    createBook,
    fetchBooks,
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
};
