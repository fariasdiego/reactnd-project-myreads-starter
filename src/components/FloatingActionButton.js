import React from 'react';
import styled from 'styled-components';
import addImage from '../icons/add.svg';
import PropTypes from 'prop-types';

const Wapper = styled.div`
  position: fixed;
  right: 25px;
  bottom: 25px;

  a {
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
  }
`;

const FloatingActionButton = ({ children }) => (
  <Wapper>
    {children}
  </Wapper>
);

FloatingActionButton.propTypes = {
  children: PropTypes.element.isRequired
};

export default FloatingActionButton;