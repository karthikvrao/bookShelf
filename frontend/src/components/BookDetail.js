import React from 'react';
import { Link } from 'react-router-dom';

const BookDetail = () => {
  return (
    <div>
      <div className="actions-bar">
        <h3><Link className="link-to-home" to="/">Home</Link></h3>
      </div>
      BookDetail
    </div>
  );
}

export default BookDetail;