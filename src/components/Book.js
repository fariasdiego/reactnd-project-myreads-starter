import React from 'react';
import PropTypes from 'prop-types';

export default class Book extends React.Component {
  static propTypes = {
    book: PropTypes.shape({
      id: PropTypes.string.isRequired,
      imageLinks: PropTypes.shape({
        thumbnail: PropTypes.string.isRequired
      }),
      title: PropTypes.string.isRequired,
      authors: PropTypes.arrayOf(PropTypes.string),
      shelf: PropTypes.string
    }),
    changeShelf: PropTypes.func.isRequired
  };

   render() {
     return (
      <li>
        <div className="book">
          <div className="book-top">
            <div 
              className="book-cover" 
              style={{ 
                width: 128, 
                height: 193, 
                backgroundImage: `url(${this.props.book.imageLinks.thumbnail})` }}>
            </div>
            <div className="book-shelf-changer">
              <select 
                value={this.props.book.shelf || ''} 
                onChange={(e) => this.props.changeShelf(this.props.book, e.target.value)}
              >
                <option value="" disabled>Move to...</option>
                <option value="wantToRead">Want to Read</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="read">Read</option>
              </select>
            </div>
          </div>
          <div className="book-title">{this.props.book.title}</div>
          <div className="book-authors">
            {this.props.book.authors ? this.props.book.authors.join(', ') : ''}
          </div>
        </div>
      </li>
     );
   }
}