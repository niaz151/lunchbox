import React from 'react';
import styled from 'styled-components';

export default class HoursContainer extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      pickupActive:1,
      storeActive: 1
    }
  }


  renderMinPickupHours = () => {
    return(
      <Hours>
        <HoursText> Sun: 12:00 PM - 5:00 PM </HoursText>
      </Hours>
    )
  }

  renderMaxPickupHours = () => {
    return(
      <Hours>
        <HoursText> Sun: 12:00 PM - 5:00 PM </HoursText>
        <HoursText> Sun: 12:00 PM - 5:00 PM </HoursText>
        <HoursText> Sun: 12:00 PM - 5:00 PM </HoursText>
        <HoursText> Sun: 12:00 PM - 5:00 PM </HoursText>
      </Hours>
    )
  }

  renderMinDeliveryHours = () => {
    return(
      <Hours>
        <HoursText> Sun: 12:00 PM - 5:00 PM </HoursText>
      </Hours>
    )
  }

  renderMaxDeliveryHours = () => {
    return(
      <Hours>
        <HoursText> Sun: 12:00 PM - 5:00 PM </HoursText>
        <HoursText> Sun: 12:00 PM - 5:00 PM </HoursText>
        <HoursText> Sun: 12:00 PM - 5:00 PM </HoursText>
        <HoursText> Sun: 12:00 PM - 5:00 PM </HoursText>
      </Hours>
    )
  }

  render(){
    return (
      <Container>
        <CustomLabel name='PICKUP HOURS' isActive={false} />
        {this.renderMinPickupHours()}
        <CustomLabel name='DELIVERY HOURS' isActive={false} />
        {this.renderMaxDeliveryHours()}
      </Container>
    )
  }
}


const CustomLabel = (props) => {
  return(
    <Label>
      <CustomText> {props.name} </CustomText>
     { (props.isActive === true) ? <ArrowDown/> :  <ArrowLeft/>}
    </Label>
  )
}


const Container = styled.div`
  width: 100%;
  background-color:white;
  padding-top:5px;
  padding-bottom:10px;
`

const Label = styled.div`
  height: 30px;
  width: calc(100%-30px);
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding-left: 15px;
  padding-right: 15px;
  cursor:pointer;
`

const CustomText = styled.div`
  font-family:'Lato',sans-serif;
  font-size: 14px;
  color: #88C640;
  font-weight: bold;
`
const Hours = styled.div`
  width: calc(100%-30px);
  padding-left: 15px;
  display:flex;
  flex-direction:column;
  align-items:center;
`
const HoursText = styled.div`
  font-family: 'Lato', sans-serif;
  font-size: 14px;
  color: #707070;
  height: 25px;
  display: flex;
  align-items:center;
  justify-content:center;
  align-self: flex-start;
`
const Arrow = styled.i`
  border: solid black;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
`
const ArrowLeft = styled(Arrow)`
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
`
const ArrowDown = styled(Arrow)`
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
`