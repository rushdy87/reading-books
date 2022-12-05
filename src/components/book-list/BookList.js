import { useContext } from 'react';

import { BooksContext } from '../../context/books';

import BookShow from '../book-show/BookShow';

const BookList = () => {
  const { books } = useContext(BooksContext);

  const renderBooks = books.map((book) => (
    <BookShow key={book.id} book={book} />
  ));

  return <div className="book-list">{renderBooks}</div>;
};

export default BookList;
