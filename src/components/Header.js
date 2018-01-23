import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  padding: 10px 0;
  background: #2e7c31;
  text-align: center;

  h1 {
    font-weight: 400;
    margin: 0;
    color: white;
  }
`;

const Header = ({ title }) => (
  <Wrapper>
    <h1>{title}</h1>
  </Wrapper>
);

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;