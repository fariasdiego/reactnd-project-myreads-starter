import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Search from './components/Search';
import ListBooks from './components/ListBooks';
import * as BooksAPI from './BooksAPI';

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentWillMount() {
    this.getBooks();
  }

  getBooks = () => {
    BooksAPI.getAll().then(books => {
      this.setState({
        books
      });
    });
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.getBooks();
    });
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Route exact path="/" render={() => (
            <ListBooks 
              books={this.state.books} 
              changeShelf={this.changeShelf}
            />
          )}/>
          <Route exact path="/search" render={() => (
            <Search 
              books={this.state.books} 
              changeShelf={this.changeShelf}
            />
          )}/>
        </div>
      </Router>
    )
  }
}

export default BooksApp
