import React from 'react';
import { Link } from 'react-router-dom';

const BookDetail = () => {
  return (
    <div className="book-detail">
      <div className="book-detail-actions">
        <Link to="/">Back</Link>
      </div>
      BookDetail
    </div>
  );
}

export default BookDetail;