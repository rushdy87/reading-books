import { useState, useContext } from 'react';

import { BooksContext } from '../../context/books';

import BookEdit from '../book-edit/BookEdit';

const BookShow = ({ book }) => {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteBookById } = useContext(BooksContext);

  const handelDeleteClick = () => {
    deleteBookById(book.id);
  };

  const handelEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handelSubmit = () => {
    setShowEdit(false);
  };

  return (
    <div className="book-show">
      <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="book" />
      {showEdit ? <BookEdit book={book} onSubmit={handelSubmit} /> : book.title}
      <div className="actions">
        <button className="edit" onClick={handelEditClick}>
          edit
        </button>
        <button className="delete" onClick={handelDeleteClick}>
          delete
        </button>
      </div>
    </div>
  );
};

export default BookShow;
