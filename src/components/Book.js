import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import arrowDropDown from '../icons/arrow-drop-down.svg';

const Wrapper = styled.div`
  width: 140px;
`;

const Top = styled.div`
  position: relative;
  height: 200px;
  display: flex;
  align-items: flex-end;
`;

const Changer = styled.div`
  position: absolute;
  right: 0;
  bottom: -10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #60ac5d;
  background-image: url(${arrowDropDown});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 20px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

  select {
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }
`;

const Cover = styled.div`
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  background: #eee;
  width: 128px;
  height: 193px;
  background-image: url(${props => props.thumbnail})
`;

const Font = css`
  font-size: 0.8em;
`;

const Title = styled.div`
  ${Font}
  margin-top: 10px;
`;

const Authors = styled.div`
  ${Font}
  color: #999;
`;

const Book = ({ book, changeShelf }) => (
  <li>
    <Wrapper>
      <Top>
        <Cover thumbnail={book.imageLinks ? book.imageLinks.thumbnail : ''} />
        <Changer>
          <select 
            value={book.shelf || ''} 
            onChange={(e) => changeShelf(book, e.target.value)}
          >
            <option value="" disabled>Move to...</option>
            <option value="wantToRead">Want to Read</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="read">Read</option>
          </select>
        </Changer>
      </Top>
      <Title>{book.title}</Title>
      <Authors>
        {book.authors ? book.authors.join(', ') : ''}
      </Authors>
    </Wrapper>
  </li>
);

Book.propTypes = {
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

export default Book;