import React from 'react';
import Book from './Book';

const BooksGrid = ({ books }) => (
  <div>
    <ol className="books-grid">
      {books.map(book => (
        <li key={book.id}>
          <Book
            book={book}
          />
        </li>
      ))}
    </ol>
  </div>
);

export default BooksGrid;
