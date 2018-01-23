import React from 'react';
import FloatingActionButton from './FloatingActionButton';
import BookShelf from './BookShelf';
import Header from './Header';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class ListBooks extends React.Component {
  static propTypes = {
    books: PropTypes.arrayOf(PropTypes.object).isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  render() {
    return (
      <div className="list-books">
        <Header title="MyReads" />
        <div className="list-books-content">
          <div>
            <BookShelf 
              title="Want to Read" 
              books={this.props.books.filter(b => b.shelf === 'wantToRead')} 
              changeShelf={this.props.changeShelf}
            />
            <BookShelf 
              title="Currently Reading" 
              books={this.props.books.filter(b => b.shelf === 'currentlyReading')} 
              changeShelf={this.props.changeShelf}
            />
            <BookShelf 
              title="Read" 
              books={this.props.books.filter(b => b.shelf === 'read')} 
              changeShelf={this.props.changeShelf}
            />
          </div>
        </div>
        <FloatingActionButton>
          <Link to="/search" />
        </FloatingActionButton>
      </div>
    );
  }
}