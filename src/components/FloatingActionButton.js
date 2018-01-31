import React from 'react';
import styled from 'styled-components';

import PropTypes from 'prop-types';

const Wapper = styled.div`
  position: fixed;
  right: 25px;
  bottom: 25px;
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