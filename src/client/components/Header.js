import React from 'react';
import styled from 'styled-components';

const Header = () => (
  <HeaderContainer color='#E8467F'>
    <LogoContainer>
      <img src='https://assets.lunchbox.io/16-handles/images/art_logo.svg' alt='' />
    </LogoContainer>
    <LoginContainer>
      <img src='https://assets.lunchbox.io/16-handles/images/icon_login.svg' alt='' />
      <span> LOGIN </span> 
    </LoginContainer>
  </HeaderContainer>
)

const HeaderContainer = styled.div`
  height: 75px;
  width: 100vw;
  background-color: ${props => props.color};
  display:flex;
  align-items:center;
  justify-content:space-between;
`

const LogoContainer = styled.div`
  height: 40px;
  width: 140px;
  margin-left: 20px;
`

const LoginContainer = styled.div`
  height: 50px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content:space-around;
  font-family: 'Lato', sans-serif;
  color:white;
  cursor:pointer
`


export default Header;