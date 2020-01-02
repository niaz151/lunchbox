import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {hideLoginMenu, renderLoginComponent} from '../../redux/actions/index';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

class Login extends React.Component{

  handleBackNav = () => {
    this.props.hideLogin()
  }

  alterComponent = () => {
    var type = this.props.active_component
    this.props.renderComponent(-type)
  }

  render(){
    return(
      <Container>

        <DescriptionContainer>
          <ArrowContainer color={this.props.color_scheme['primary']} onClick={this.handleBackNav} >
            <Arrow/> 
          </ArrowContainer>
          <DescriptionText color={this.props.color_scheme['secondary']} > LOGIN &nbsp; OR &nbsp;  SIGN UP </DescriptionText>
        </DescriptionContainer>

        <NavOptionsContainer>
          <NavOption 
            active_color={this.props.color_scheme['primary']} 
            active={this.props.active_component === 1}
            inactive_color='#717171'
            onClick={this.alterComponent}
          > 
            LOGIN 
          </NavOption>

          <NavOption 
            active_color={this.props.color_scheme['primary']} 
            active={this.props.active_component === -1}
            inactive_color='#717171'
            onClick={this.alterComponent}
          > 
            SIGN UP 
          </NavOption>
        </NavOptionsContainer>

        {this.props.active_component === 1 ? <LoginForm/> : <SignupForm/>}
      </Container>
    )
  }
}

const Container = styled.div`
  position: absolute;
  height: 100%;
  width: 38%;
  top: 0;
  right: 0;
  background-color:white;

  @media(max-width: 1200px){
    width: 50vw;
  }

  @media(max-width: 1050px){
    width: 80vw;
  }

  @media(max-width: 750px){
    width: 100vw;
  }
`

const DescriptionContainer = styled.div`
  height: 73px;
  width: 100%;
  display: flex;
  align-items:center;
  padding-left: 20px;
`
const DescriptionText = styled.div`
  font-family: 'Lato',sans-serif;
  font-size: 16px;
  margin-left: 20px;
  font-weight:600;
  color: ${props => props.color};
`

const NavOptionsContainer = styled.div`
  height: 75px;
  width: 100%;
  display: flex;
`

const NavOption = styled.div`
  height: 100%;
  width: 50%;
  display:flex;
  align-items:center;
  justify-content: center;
  font-family: 'Lato', sans-serif;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  border-bottom: 1px inset #D4E2D4;
  color: ${ props => props.active === true ? `${props.active_color}`: `${props.inactive_color}`};
  border-bottom: ${props => props.active === true ? `4px solid ${props.active_color}` : "2px inset #D4E2D4"}
`

const ArrowContainer = styled.div`
  height: 30px;
  width: 30px;
  background-color: ${props => props.color};
  border-radius: 20px;
  display:flex;
  align-items:center;
  justify-content:center;
  cursor:pointer;
`
const Arrow = styled.i`
  border: solid white;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  margin-left: 2px;
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
  `

  function mapStateToProps(state){
    return({
      color_scheme: state.color_scheme,
      active_component: state.login_menu.activeComponent
    })
  }

  function matchDispatchToProps(dispatch){
    return bindActionCreators({
      hideLogin: hideLoginMenu,
      renderComponent: renderLoginComponent
    }, dispatch)
  }
  

export default connect(mapStateToProps, matchDispatchToProps)(Login);