import BookShow from '../book-show/BookShow';
import { useBooksContext } from '../../hooks/use-books-context';
const BookList = () => {
  const { books } = useBooksContext();

  const renderBooks = books.map((book) => (
    <BookShow key={book.id} book={book} />
  ));

  return <div className="book-list">{renderBooks}</div>;
};

export default BookList;
