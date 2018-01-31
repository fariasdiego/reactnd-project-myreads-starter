import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
import styled from 'styled-components';
import BooksGrid from './BooksGrid';

const Shelf = styled.div`
  padding: 0 10px 20px;

  @media (min-width: 600px) {
    padding: 0 20px 40px;
  }
`;

const Title = styled.h2`
  border-bottom: 1px solid #dedede;
`;

const Books = styled.div`
  text-align: center;
`;

const BookShelf = ({ title, books, changeShelf }) => (
  <Shelf>
    <Title>{title}</Title>
    <Books>
      <BooksGrid>
        {books.map(b => (
          <Book
            key={b.id}
            book={b}
            changeShelf={changeShelf}
          />
        ))}
      </BooksGrid>
    </Books>
  </Shelf>
);

BookShelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired
  }).isRequired),
  changeShelf: PropTypes.func.isRequired
};

export default BookShelf;