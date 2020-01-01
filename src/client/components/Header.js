import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

class Header extends React.Component {

  render(){
    
    return(
      <HeaderContainer color={this.props.color_scheme['primary']}>
        <LogoContainer>
          <img src='https://assets.lunchbox.io/16-handles/images/art_logo.svg' alt='' />
        </LogoContainer>
        <LoginContainer>
          <img src='https://assets.lunchbox.io/16-handles/images/icon_login.svg' alt='' />
          <span> LOGIN </span> 
        </LoginContainer>
      </HeaderContainer>
    )
  }
}

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

function mapStateToProps(state){
  return({
    color_scheme: state.color_scheme
  })
}

export default connect(mapStateToProps, null)(Header);