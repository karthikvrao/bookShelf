import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import BookShelf from './components/BookShelf';
import BookDetail from './components/BookDetail';

class App extends Component {
  render() {
    return (
      <div>
        <div className="app-header">
          <h1>Book Shelf</h1>
        </div>

        <Switch>
          <Route exact path="/" component={BookShelf} />
          <Route exact path="/books/:book_id" component={BookDetail} />
        </Switch>
      </div>
    );
  }
}

export default App;
