import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

class SignupForm extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: ""
    }
  }

  handleBtnClick = (e) => {
    e.preventDefault()
    fetch(`http://ec2-34-227-27-186.compute-1.amazonaws.com:3001/addUser/?first_name="${this.state.first_name}"&last_name="${this.state.last_name}"&email="${this.state.email}"&password="${this.password}"`)
    .then( alert('done') )
    .catch( err => console.log(err))
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: `${e.target.value}`
    })
  }

  render(){
    return(
      <FormContainer  onChange={this.handleChange}>
        <ItemContainer style={{marginTop:'20px'}}>
          <Label> First Name </Label>
          <CustomInput placeholder='Enter First Name Here' name="first_name" />
        </ItemContainer> 
        <ItemContainer>
          <Label> Last Name </Label>
          <CustomInput placeholder='Enter Last Name Here' name="last_name" />
        </ItemContainer> 
        <ItemContainer>
          <Label> Email </Label>
          <CustomInput placeholder='Enter Email Here' name="email" />
        </ItemContainer> 
        <ItemContainer>
          <Label> Password </Label>
          <CustomInput placeholder='Enter Password Here' name="password" />
        </ItemContainer> 
        <CustomButton color={this.props.color_scheme['primary']} onClick={this.handleBtnClick} > SIGN UP </CustomButton>
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
  margin-left:20px;
  background-color: ${props => props.color};
`

function mapStateToProps(state){
  return({
    color_scheme: state.color_scheme
  })
}

export default connect(mapStateToProps,null)(SignupForm);