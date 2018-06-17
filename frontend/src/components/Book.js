import React from 'react';

const Book = ({ book }) => {
  return (
    <div className="book">
      <div className="book-title">{book.title}</div>
      <div className="book-authors">
        {book.authors && book.authors.join(", ")}
      </div>
      <div className="book-pages">{book.pages} pages</div>
    </div>
  );
}

export default Book;
