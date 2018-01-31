import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import * as BooksAPI from '../BooksAPI';
import Book from './Book';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BooksGrid from './BooksGrid';
import arrowBack from '../icons/arrow-back.svg';

const Bar = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 5;
  display: flex;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 0 6px rgba(0,0,0,0.23);
`;

const InputWrapper = styled.div`
  flex: 1;
  background: #e9e;

  input {
    width: 100%;
    padding: 15px 10px;
    font-size: 1.25em;
    border: none;
    outline: none;
  }
`;

const Results = styled.div`
  padding: 80px 10px 20px;
`;

const Close = styled(Link)`
  display: block;
  top: 20px;
  left: 15px;
  width: 50px;
  height: 53px;
  background: white;
  background-image: url(${arrowBack});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 28px;
  font-size: 0;
  cursor: pointer;
`;

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
      <div>
        <Bar>
          <Close to="/">Close</Close>
          <InputWrapper>
            <input 
              type="text" 
              placeholder="Search by title or author" 
              onChange={e => this.search(e.target.value)}
            />
          </InputWrapper>
        </Bar>
        <Results>
          <BooksGrid>
            {this.state.booksSearched.map(b => (
              <Book 
                key={b.id}
                book={b}
                changeShelf={this.props.changeShelf}
              />)
            )}
          </BooksGrid>
        </Results>
      </div>
    );
  }
}