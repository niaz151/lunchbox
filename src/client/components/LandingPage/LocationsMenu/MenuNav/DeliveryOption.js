import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
class DeliveryOption extends React.Component{

  render(){
    return(
      <Container>
        <GlobalStyle/>
        <FormInstructions>
          <FormLeftSpan> Where's your food going? </FormLeftSpan>
          <FormRightSpan> Apt/Suite </FormRightSpan> 
        </FormInstructions>
        <FormInputContainer>
           <LeftFormInput type='text' placeholder='Enter Your Address'/>
           <RightFormInput type='text' placeholder='Optional'/>
        </FormInputContainer>
        <BtnContainer>
          <Btn color="#E8467F">
            Search
          </Btn>
        </BtnContainer>
      </Container>
    )
  }
}

const GlobalStyle = createGlobalStyle`
  input:focus{
    outline:none;
  }
`
const Container = styled.div`
  height: 170px;
  width: 100%;
  display:flex;
  flex-direction:column;
  box-shadow: 0 4px 7px 2px #b8b8b8;
`
const FormInstructions = styled.div`
  flex:1;
  width: 100%;
  display:flex;
  align-items:center;  
  justify-content:space-between;
`
const FormSpan = styled.span`
  font-family:'Lato',sans-serif;
  font-size: 16px;
  color: #8E8E8E;
`
const FormLeftSpan = styled(FormSpan)`
  margin-left: 20px;
`
const FormRightSpan = styled(FormSpan)`
  margin-right: 20px;
`

const FormInputContainer = styled.div`
  height: 30%;
  width: 100%;
  display:flex;
  align-items:center;
  justify-content: space-between;
`
const FormInput = styled.input`
  border:none;
  border-bottom:1px solid black;
  height: 30px;
  font-family: 'Lato',sans-serif;
  font-size: 15px;
`

const LeftFormInput = styled(FormInput)`
  margin-left:20px;
  width: 60%;
`
const RightFormInput = styled(FormInput)`
  margin-right: 20px;
  width: 20%;
  text-align:right;
  `
const BtnContainer = styled.div`
  height: 40%;
  width:100%;
  display:flex;
  align-items:center;
  justify-content:center;
`

const Btn = styled.button`
  height: 60%;
  width: 80%;
  background-color: ${props => props.color};
  color:white;
  font-family:'Lato',sans-serif;
  font-size:18px;
  font-weight: 600;
`

export default DeliveryOption;