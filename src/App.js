import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Search from './components/Search';
import ListBooks from './components/ListBooks';
import * as BooksAPI from './BooksAPI';
import styled from 'styled-components';
import _ from 'lodash';

const App = styled.div`
  background: white;
`;

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentWillMount() {
    BooksAPI.getAll().then(books => {
      this.setState({
        books
      });
    });
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.setState({
        books: _.uniqBy([{...book, shelf}, ...this.state.books], 'id')
      });
    });
  }

  render() {
    return (
      <Router>
        <App>
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
        </App>
      </Router>
    )
  }
}

export default BooksApp
