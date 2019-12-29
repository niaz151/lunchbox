import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
class DeliveryOption extends React.Component{

  render(){
    return(
      <Container>
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

const Container = styled.div`
  height: 170px;
  width: 100%;
  box-shadow: 0px 4px 2px -2px gray;
  display:flex;
  flex-direction:column;
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
`
const FormLeftSpan = styled(FormSpan)`
  margin-left: 20px;
`
const FormRightSpan = styled(FormSpan)`
  margin-right: 20px;
`

const FormInputContainer = styled.div`
  flex:1;
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
  flex:1;
  width:100%;
  display:flex;
  align-items:center;
  justify-content:center;
`

const Btn = styled.button`
  height: 80%;
  width: 80%;
  background-color: ${props => props.color};
  color:white;
  font-family:'Lato',sans-serif;
  font-size:18px;
  font-weight: 600;
`

export default DeliveryOption;