import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteSingleBook } from '../actions/bookActions';

class BookDetail extends Component {
  state = {
    redirectonDelete: false
  };

  handleClickDelete = () => {
    const { dispatch, match } = this.props;
    dispatch(deleteSingleBook(match.params.book_id));
  }

  componentDidUpdate(prevProps) {
    const { booksById: prev_booksById, match: prev_match } = prevProps;
    const { booksById, match } = this.props;

    // Redirect to Home page on delete of book
    if (prev_booksById[prev_match.params.book_id] !== booksById[match.params.book_id]) {
      this.setState({ redirectonDelete: true });
    }
  }

  render() {
    const { redirectonDelete } = this.state;
    const { match, booksById } = this.props;
    const book = booksById[match.params.book_id];

    if (redirectonDelete) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <div className="actions-bar">
          <h3><Link className="link-to-home" to="/">Home</Link></h3>
          <div className="action-buttons">
            <button className="btn-danger"
              disabled={book === undefined}
              onClick={this.handleClickDelete}>
              Delete
          </button>
          </div>
        </div>
        <div id="book-detail">
          <h3>Book Details</h3>
          {book === undefined ? <p>Book not found</p> :
            (<div id="book-detail-info">
              <p><strong>Title: </strong>{book.title}</p>
              <p><strong>Number of pages: </strong>{book.pages}</p>
              <p><strong>Link for more info: </strong>{book.infoLink}</p>
            </div>
            )
          }
        </div>
      </div>
    );
  }
}


const mapStateToProps = ({ books }) => ({ booksById: books.byId });

export default connect(mapStateToProps)(BookDetail);