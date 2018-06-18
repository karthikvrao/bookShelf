import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteSingleAuthor } from '../actions/authorActions';

class AuthorDetail extends Component {
  state = {
    redirectonDelete: false
  };

  handleClickDelete = () => {
    const { dispatch, match } = this.props;
    dispatch(deleteSingleAuthor(match.params.author_id));
  }

  componentDidUpdate(prevProps) {
    const { authorsById: prev_authorsById, match: prev_match } = prevProps;
    const { authorsById, match } = this.props;

    // Redirect to Home page on delete of author
    if (prev_authorsById[prev_match.params.author_id] !== authorsById[match.params.author_id]) {
      this.setState({ redirectonDelete: true });
    }
  }

  render() {
    const { redirectonDelete } = this.state;
    const { match, authorsById } = this.props;
    const author = authorsById[match.params.author_id];

    if (redirectonDelete) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <div className="actions-bar">
          <h3><Link className="link-to-home" to="/">Home</Link></h3>
          <div className="action-buttons">
            <button className="btn-danger"
              disabled={author === undefined}
              onClick={this.handleClickDelete}>
              Delete
          </button>
          </div>
        </div>
        <div id="author-detail">
          <h3>Author Details</h3>
          {author === undefined ? <p>Author not found</p> :
            (<div id="author-detail-info">
              <p><strong>First name: </strong>{author.firstName}</p>
              <p><strong>Last name: </strong>{author.lastName}</p>
            </div>
            )
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (authors) => ({ authorsById: authors.byId });

export default connect(mapStateToProps)(AuthorDetail);