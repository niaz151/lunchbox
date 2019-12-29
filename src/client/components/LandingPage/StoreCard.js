import React from 'react';
import styled from 'styled-components';

class StoreCard extends React.Component{

  render(){
    return(
      <Container>
        Card
      </Container>
    )
  }
}

const Container = styled.div`
  height: 315px;
  width: 90%;
  box-shadow: 0 4px 7px 2px #b8b8b8;
  margin-top:20px;
`

export default StoreCard;