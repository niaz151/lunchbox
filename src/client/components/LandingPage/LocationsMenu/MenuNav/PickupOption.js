import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';

class PickupOption extends React.Component{

  render(){
    return(
      <React.Fragment>
        <GlobalStyle/>
        <Container>
          <CustomInput type='text' placeholder='Enter Your Address' />
          <img src='https://assets.lunchbox.io/16-handles/images/icon_geo.svg' style={img_styles} alt='' />
        </Container>
      </React.Fragment>
    )
  }
}

const GlobalStyle = createGlobalStyle`
  input:focus{
    outline: none !important;
  }
`

const Container = styled.div`
  height: 120px;
  width: 100%;
  box-shadow: 0 4px 7px 2px #b8b8b8;
  display:flex;
  align-items:center;
  justify-content:center;
`

const CustomInput = styled.input`
  border:none;
  border-bottom:1px solid black;
  height: 30px;
  width: 80%;
  font-family: 'Lato',sans-serif;
  font-size: 15px;
`
const img_styles = {
  height: "30px",
  width: "30px",
  cursor:"pointer"
}

export default PickupOption;