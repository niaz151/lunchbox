import React from 'react';
import styled from 'styled-components';
class DeliveryOption extends React.Component{

  render(){
    return(
      <Container>
        Delivery Option
      </Container>
    )
  }
}

const Container = styled.div`
  height: 170px;
  width: 100%;
  box-shadow: 0px 4px 2px -2px gray;
`

export default DeliveryOption;