import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {dispatch} from 'redux';
import {handleLogin} from '../../redux/actions/index';
import { bindActionCreators } from 'redux';

class LoginForm extends React.Component{


  constructor(props){
    super(props)
    this.state = {
      email: "",
      password: ""
    }
  }

  handleBtnClick = (e) => {
    e.preventDefault()
    fetch(`http://ec2-34-227-27-186.compute-1.amazonaws.com:3001/login/?email="${this.state.email}"&password="${this.state.password}"`)
    .then( res => res.json())
    .then( data => this.props.handle_login(data.isLoggedIn))
    .catch( err => console.log(err))
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: `${e.target.value}`
    })
  }

  render(){
    return(
      <FormContainer onChange={this.handleChange} >
        <ItemContainer style={{marginTop:'20px'}}>
          <Label> Email </Label>
          <CustomInput placeholder='Enter Email Here' name='email' />
        </ItemContainer> 
        <ItemContainer>
          <Label> Password </Label>
          <CustomInput placeholder='Enter Password Here' name='password' />
        </ItemContainer> 
        <CustomButton color={this.props.color_scheme['primary']}  onClick={this.handleBtnClick} > LOGIN </CustomButton>
      </FormContainer>
    )
  }
}

const FormContainer = styled.form`
  width: 100%;
`

const ItemContainer = styled.div`
  height: 110px;
  width: 100%;
  display: flex;
  flex-direction: column;
`

const Label = styled.div`
  height: 60%;
  width: 100%;
  display: flex;
  align-items:center;
  padding-left: 20px;
  font-family: 'Lato', sans-serif;
  font-size: 15px;;
`
const CustomInput = styled.input`
  border:none;
  border-bottom:1px solid black;
  height: 30px;
  width: 90%;
  font-family: 'Lato',sans-serif;
  font-size: 15px;
  margin-left: 20px;
`
const CustomButton = styled.button`
  height: 45px;
  margin-top: 50px;
  width: 92%;
  color:white;
  font-family: 'Lato',sans-serif;
  font-size: 15px;
  background-color: ${props => props.color};
  margin-left:20px;
`

function mapStateToProps(state){
  return({
    color_scheme: state.color_scheme,
    isLoggedIn: state.isLoggedIn
  })
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    handle_login: handleLogin
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(LoginForm);