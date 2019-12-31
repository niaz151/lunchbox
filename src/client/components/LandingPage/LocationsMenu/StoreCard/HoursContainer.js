import React from 'react';
import styled from 'styled-components';

export default class HoursContainer extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      pickup_hours: [],
      store_hours: [],
      pickupActive:1,
      storeActive: 1
    }
  }

  componentDidMount(){
    Promise.all([
      fetch(`http://ec2-34-227-27-186.compute-1.amazonaws.com:3001/getPickupHours?branch_id=${this.props.id}`).then( res => res.json()),
      fetch(`http://ec2-34-227-27-186.compute-1.amazonaws.com:3001/getStoreHours?branch_id=${this.props.id}`).then( res => res.json())
    ])
    .then ( ([pickup_hours, store_hours]) => {
      this.setState({
        pickup_hours: pickup_hours,
        store_hours: store_hours
      })
    })
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
        <HoursText> Mon: 12:00 PM - 5:00 PM </HoursText>
        <HoursText> Tues: 12:00 PM - 5:00 PM </HoursText>
        <HoursText> Wed: 12:00 PM - 5:00 PM </HoursText>
      </Hours>
    )
  }

  renderMinStoreHours = () => {
    return(
      <Hours>
        <HoursText> Sun: 12:00 PM - 5:00 PM </HoursText>
      </Hours>
    )
  }

  renderMaxStoreHours = () => {
    return(
      <Hours>
        <HoursText> Sun: 12:00 PM - 5:00 PM </HoursText>
        <HoursText> Mon: 12:00 PM - 5:00 PM </HoursText>
        <HoursText> Tues: 12:00 PM - 5:00 PM </HoursText>
        <HoursText> Wed: 12:00 PM - 5:00 PM </HoursText>
      </Hours>
    )
  }


  // ADJUST STATE WHEN LABEL CLICKED
  handleLabelClick = (type) => {
    if(type === 'pickup'){
      var curr_hours = this.state.pickupActive
      this.setState({pickupActive: -curr_hours})
    }
    else{
      var curr_hours = this.state.storeActive
      this.setState({storeActive: -curr_hours})
    }
  }


  // RENDER ARROW TYPE DEPENDING ON STATE
  renderCustomLabel = (text,type) => {

    var arrow_status

    if(type === 'pickup'){
      arrow_status = this.state.pickupActive
    }
    else{
      arrow_status = this.state.storeActive
    }

    return(
      <Label onClick={type === 'pickup' ?  () => this.handleLabelClick('pickup') :  () => this.handleLabelClick('store') } >
        <CustomText> {text} </CustomText>
        { (arrow_status === 1) ? <ArrowLeft/> :  <ArrowDown/>}
      </Label>
    )
  }


  render(){

    var hours = this.state.hours
    var day = new Date().getDay()


    return (
      <Container>
        {this.renderCustomLabel('PICKUP HOURS', 'pickup')}
        {this.state.pickupActive === 1 ? this.renderMinPickupHours() : this.renderMaxPickupHours()}
        {this.renderCustomLabel('STORE HOURS', 'store')}
        {this.state.storeActive === 1 ? this.renderMinStoreHours() : this.renderMaxStoreHours() }
      </Container>
    )
  }
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
  font-size: 16px;
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
  border: solid #565656;
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