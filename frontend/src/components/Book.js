import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
  return (
    <Link to={`/books/${book.id}`}>
      <div className="book">
        <div className="book-title">{book.title}</div>
        <div className="book-pages">{book.pages} pages</div>
      </div>
    </Link>
  );
}

export default Book;
