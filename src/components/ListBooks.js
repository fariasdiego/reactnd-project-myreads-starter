import React from 'react';
import FloatingActionButton from './FloatingActionButton';
import BookShelf from './BookShelf';
import Header from './Header';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import addImage from '../icons/add.svg';

const Content = styled.div`
  padding: 0 0 80px;
  flex: 1;
`;

const AddBook = styled(Link)`
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #2e7d32;
  background-image: url(${addImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 28px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  font-size: 0;
  cursor: pointer;
`;

const ListBooks = ({ books, changeShelf }) => (
  <div>
    <Header title="MyReads" />
    <Content>
      <BookShelf 
        title="Want to Read" 
        books={books.filter(b => b.shelf === 'wantToRead')} 
        changeShelf={changeShelf}
      />
      <BookShelf 
        title="Currently Reading" 
        books={books.filter(b => b.shelf === 'currentlyReading')} 
        changeShelf={changeShelf}
      />
      <BookShelf 
        title="Read" 
        books={books.filter(b => b.shelf === 'read')} 
        changeShelf={changeShelf}
      />
    </Content>
    <FloatingActionButton>
      <AddBook to="/search" />
    </FloatingActionButton>
  </div>
);

ListBooks.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  changeShelf: PropTypes.func.isRequired
}

export default ListBooks;