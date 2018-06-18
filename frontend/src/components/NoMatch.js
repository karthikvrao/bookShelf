import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch = () => (
  <div>
    <h2>
      The page you are looking for does not exist or has been removed. To return to the home page, click <Link to="/">here</Link>.
    </h2>
  </div>
);

export default NoMatch;