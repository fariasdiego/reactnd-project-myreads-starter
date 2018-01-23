import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

export default class BookShelf extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired),
    changeShelf: PropTypes.func.isRequired
  };
  
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map(b => (
              <Book
                key={b.id}
                book={b}
                changeShelf={this.props.changeShelf}
              />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}