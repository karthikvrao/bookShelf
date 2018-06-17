import React, { Component } from 'react';
import './App.css';
import BookShelf from './components/BookShelf';

class App extends Component {
  render() {
    return (
      <div>
        <div className="app-header">
          <h1>Book Shelf</h1>
        </div>
        <BookShelf />
      </div>
    );
  }
}

export default App;
