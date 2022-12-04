import { useState } from 'react';

import BookEdit from '../book-edit/BookEdit';

const BookShow = ({ book, onDelete, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false);

  const handelDeleteClick = () => {
    onDelete(book.id);
  };

  const handelEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handelSubmit = (id, title) => {
    onEdit(id, title);
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
