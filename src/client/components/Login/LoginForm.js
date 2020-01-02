import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

class LoginForm extends React.Component{

  render(){
    return(
      <Container>
        <ItemContainer style={{marginTop:'20px'}}>
          <Label> Email </Label>
          <CustomInput placeholder='Enter Email Here' />
        </ItemContainer> 
        <ItemContainer>
          <Label> Password </Label>
          <CustomInput placeholder='Enter Password Here' />
        </ItemContainer> 
        <CustomButton color={this.props.color_scheme['primary']} > LOGIN </CustomButton>
      </Container>
    )
  }
}

const Container = styled.div`
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
  padding-left: 10px;
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
  padding-left: 10px;
`
const CustomButton = styled.button`
  height: 45px;
  margin-top: 50px;
  width: 92%;
  color:white;
  font-family: 'Lato',sans-serif;
  font-size: 15px;
  background-color: ${props => props.color};
`

function mapStateToProps(state){
  return({
    color_scheme: state.color_scheme
  })
}

export default connect(mapStateToProps, null)(LoginForm);