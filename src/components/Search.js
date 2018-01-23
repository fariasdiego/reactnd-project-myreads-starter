import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import * as BooksAPI from '../BooksAPI';
import Book from './Book';
import PropTypes from 'prop-types';

export default class Search extends React.Component {
  static propTypes = {
    books: PropTypes.arrayOf(PropTypes.object).isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  state = {
    booksSearched: []
  }

  search = _.debounce(query => {
    BooksAPI.search(query).then(booksSearched => {
      if (booksSearched instanceof Array) {
        this.mergeBooks(booksSearched, this.props.books);
      } else {
        this.setState({booksSearched:[]});
      }
    });

  }, 500);

  componentWillReceiveProps(nextProps) {
    this.mergeBooks(this.state.booksSearched, nextProps.books);
  }

  mergeBooks = (booksSearched, books) => {
    this.setState({
      booksSearched: booksSearched
        .map(bookSearched => books.find(book => bookSearched.id === book.id) || bookSearched)
    });
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input 
              type="text" 
              placeholder="Search by title or author" 
              onChange={e => this.search(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.booksSearched.map(b => (
              <Book 
                key={b.id}
                book={b}
                changeShelf={this.props.changeShelf}
              />)
            )}
          </ol>
        </div>
      </div>
    );
  }
}