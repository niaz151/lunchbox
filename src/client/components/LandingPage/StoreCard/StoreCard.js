import React from 'react';
import styled from 'styled-components';
import {ContactContainer} from './ContactContainer';
import {HoursContainer} from './HoursContainer';

class StoreCard extends React.Component{

  render(){
    return(
      <Container>
        <ContactContainer/>
        <HoursContainer/>
      </Container>
    )
  }
}

const Container = styled.div`
  height: 315px;
  width: 90%;
  box-shadow: 0 4px 7px 2px #b8b8b8;
  margin-top:25px;
`

export default StoreCard;