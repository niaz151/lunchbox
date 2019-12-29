import React from 'react';
import styled from 'styled-components';

class PickupOption extends React.Component{

  render(){
    return(
      <Container>
        <CustomInput type='text' placeholder='Enter Your Address' />
        <img src='https://assets.lunchbox.io/16-handles/images/icon_geo.svg' alt='' />
      </Container>
    )
  }
}

const Container = styled.div`
  height: 120px;
  width: 98%;
  box-shadow: 2px 4px 2px -2px gray;
  display:flex;
  align-items:center;
  justify-content:center;
`

const CustomInput = styled.input`
  outline:none;
  height: 30px;
  width: 90%;
  font-family: 'Lato',sans-serif;
  font-size: 15px;
`


export default PickupOption;