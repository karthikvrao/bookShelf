import React, { Component } from 'react';
import BooksGrid from './BooksGrid';

class BookShelf extends Component {
  render() {
    //dummy data
    const books = [
      { id: 1, title: 'sometitle1', authors: ['someauthor1', 'someauthor2'], pages: 80 },
      { id: 2, title: 'sometitle2', authors: ['someauthor2', 'someauthor3'], pages: 820 },
      { id: 3, title: 'sometitle3', authors: ['someauthor3', 'someauthor4'], pages: 50 },
      { id: 4, title: 'sometitle4', authors: ['someauthor4', 'someauthor5'], pages: 97 },
      { id: 5, title: 'sometitle5', authors: ['someauthor5', 'someauthor6', 'someauthor7'], pages: 999 },
      { id: 6, title: 'sometitle5', authors: ['someauthor5', 'someauthor6', 'someauthor7'], pages: 999 },
      { id: 7, title: 'sometitle5', authors: ['someauthor5', 'someauthor6', 'someauthor7'], pages: 999 },
      { id: 8, title: 'sometitle5', authors: ['someauthor5', 'someauthor6', 'someauthor7'], pages: 999 }
    ];
    return (

      <div className="bookshelf">
        <div className="bookshelf-actions">
          <h2>Search</h2>
          <h2>Add Author</h2>
          <h2>Add Book</h2>
        </div>
        <BooksGrid books={books} />
      </div>
    );
  }
}

export default BookShelf;