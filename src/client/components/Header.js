import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return <HeaderContainer/>
}

const HeaderContainer = styled.div`
  height: 50px;
  width: 100vw;
  background-color: ${props => props.primary ? 'red': 'blue'}
`
export default Header;