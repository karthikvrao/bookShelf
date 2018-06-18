import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import BookShelf from './components/BookShelf';
import BookDetail from './components/BookDetail';
import CreateAuthor from './components/CreateAuthor';

class App extends Component {
  render() {
    return (
      <div>
        <div className="app-header">
          <h1>Book Shelf</h1>
        </div>
        <main>
          <Switch>
            <Route exact path="/" component={BookShelf} />
            <Route exact path="/authors/create" component={CreateAuthor} />
            <Route exact path="/books/:book_id" component={BookDetail} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
