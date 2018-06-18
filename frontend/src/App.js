import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import './App.css';
import BookShelf from './components/BookShelf';
import BookDetail from './components/BookDetail';
import CreateAuthor from './components/CreateAuthor';
import NoMatch from './components/NoMatch';

class App extends Component {
  render() {
    return (
      <div>
        <div className="app-header">
          <Link to="/"><h1>Book Shelf</h1></Link>
        </div>
        <main>
          <Switch>
            <Route exact path="/" component={BookShelf} />
            <Route exact path="/authors/create" component={CreateAuthor} />
            <Route exact path="/books/:book_id" component={BookDetail} />
            <Route component={NoMatch} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
