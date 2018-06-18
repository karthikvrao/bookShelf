import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { addSingleBook } from '../actions/bookActions';
import { addIdToObj } from '../utils/helpers';

class CreateBook extends Component {
  state = {
    newBook: {
      title: '',
      pages: '',
      infoLink: ''
    },
    errors: {
      title: false,
      pages: false,
      infoLink: false
    },
    redirectToPath: ''
  };

  handleChangeTitle = event => {
    const value = event.target.value;
    this.setState(prevState => {
      const newState = { ...prevState };
      newState.newBook.title = value;
      newState.errors.title = value === '' ? true : false;
      return newState;
    });
  }

  handleChangePages = event => {
    const value = event.target.value;
    this.setState(prevState => {
      const newState = { ...prevState };
      newState.newBook.pages = value;
      newState.errors.pages = value === '' ? true : false;
      return newState;
    });
  }

  handleChangeInfoLink = event => {
    const value = event.target.value;
    this.setState(prevState => {
      const newState = { ...prevState };
      newState.newBook.infoLink = value;
      newState.errors.infoLink = value === '' ? true : false;
      return newState;
    });
  }

  shouldDisableSave = () => {
    // Disable save if form is initial or if it has errors
    const { newBook, errors } = this.state;
    return Object.values(newBook).indexOf('') !== -1 || Object.values(errors).indexOf(true) !== -1;
  }

  handleClickSave = () => {
    const { dispatch } = this.props;
    const book = addIdToObj(this.state.newBook);

    dispatch(addSingleBook(book));
    this.setState({ redirectToPath: `/books/${book.id}` });
  }

  render() {
    const { newBook, errors, redirectToPath } = this.state;

    if (redirectToPath) {
      return <Redirect to={redirectToPath} />;
    }

    return (
      <div>
        <div className="actions-bar">
          <h3><Link className="link-to-home" to="/">Home</Link></h3>
          <div className="action-buttons">
            <button className="btn-primary"
              disabled={this.shouldDisableSave()}
              onClick={this.handleClickSave}>
              Save
          </button>
          </div>
        </div>
        <div id="create-book-form">
          <h3>Add new book</h3>
          <input type="text" name="title" value={newBook.title} onChange={this.handleChangeTitle}
            placeholder="Title" />
          {errors.title && <p className="error">Title cannot be empty.</p>}
          <input type="text" name="pages" value={newBook.pages} onChange={this.handleChangePages}
            placeholder="Number of pages" />
          {errors.pages && <p className="error">Number of pages cannot be empty.</p>}
          <input type="text" name="infoLink" value={newBook.infoLink} onChange={this.handleChangeInfoLink}
            placeholder="Link for more info" />
          {errors.infoLink && <p className="error">Link for more info cannot be empty.</p>}
        </div>
      </div>
    );
  }
}

export default connect()(CreateBook);