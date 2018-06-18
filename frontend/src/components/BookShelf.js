import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import BooksGrid from './BooksGrid';

class BookShelf extends Component {
  render() {
    const { books } = this.props;
    const bookList = Object.values(books);
    const noBooks = bookList === undefined || bookList.length === 0;

    return (
      <div>
        <div className="actions-bar">
          <h3><Link className="link-to-home" to="/">Home</Link></h3>
          <div className="action-buttons">
            <Link to="/authors/create">Add author</Link>
            <Link to="/books/create">Add book</Link>
          </div>
        </div>
        {noBooks ?
          <div className="noBooksFound">
            <p><strong>No books found in shelf</strong></p>
          </div> :
          <BooksGrid books={bookList} />
        }
      </div>
    );
  }
}

const mapStateToProps = ({ books }) => ({ books: books.byId });

export default connect(mapStateToProps)(BookShelf);