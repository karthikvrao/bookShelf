import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import addSingleAuthor from '../actions/authorActions';
import { addIdToObj } from '../utils/helpers';

class CreateAuthor extends Component {
  state = {
    newAuthor: {
      firstName: '',
      lastName: ''
    },
    errors: {
      firstName: false,
      lastName: false
    },
    redirectToPath: ''
  };

  handleChangeFirstName = event => {
    const value = event.target.value;
    this.setState(prevState => {
      const newState = { ...prevState };
      newState.newAuthor.firstName = value;
      newState.errors.firstName = value === '' ? true : false;
      return newState;
    });
  }

  handleChangeLastName = event => {
    const value = event.target.value;
    this.setState(prevState => {
      const newState = { ...prevState };
      newState.newAuthor.lastName = value;
      newState.errors.lastName = value === '' ? true : false;
      return newState;
    });
  }

  shouldDisableSave = () => {
    // Disable save if form is initial or if it has errors
    const { newAuthor, errors } = this.state;
    return Object.values(newAuthor).indexOf('') !== -1 || Object.values(errors).indexOf(true) !== -1;
  }

  handleClickSave = () => {
    const { dispatch } = this.props;
    dispatch(addSingleAuthor(addIdToObj(this.state.newAuthor)));
    // this.setState({ redirectToPath: `/authors/${author.id}` });
  }

  render() {
    const { newAuthor, errors, redirectToPath } = this.state;

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
        <div id="create-author-form">
          <h4>Add new Author</h4>
          <input type="text" name="firstName" value={newAuthor.firstName} onChange={this.handleChangeFirstName}
            placeholder="First Name" />
          {errors.firstName && <p className="error">First name cannot be empty.</p>}
          <input type="text" name="lastName" value={newAuthor.lastName} onChange={this.handleChangeLastName}
            placeholder="Last Name" />
          {errors.lastName && <p className="error">Last name cannot be empty.</p>}
        </div>
      </div>
    );
  }
}

export default connect()(CreateAuthor);