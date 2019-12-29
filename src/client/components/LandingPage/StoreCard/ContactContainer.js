import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';

export const ContactContainer = () => {
  return(
    <Container>
      <TitleContainer>
        <CustomTitle> CHELSEA </CustomTitle>
        <CustomBtn tabindex="1" type='button'> ORDER </CustomBtn> 
      </TitleContainer>
      <PhoneContainer>
        <CustomPhoneNum> 212-627-2808 </CustomPhoneNum> 
      </PhoneContainer>
      <AddressContainer>
        <CustomText> 345 Chambers St. </CustomText> 
        <CustomText> Brooklyn, NY 11208 </CustomText> 
      </AddressContainer>
    </Container>

  )
}

const Container = styled.div`
  height: 165px;
  width: 100%;
  background-color:white;
  border-bottom: 1.5px solid #E3E3E3;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
`

const TitleContainer = styled.div`
  height: 30%;
  width: calc(100% - 30px);
  display:flex;
  align-items:center;
  justify-content: space-between;
`

const CustomTitle = styled.div`
  height: 15px;
  color: #E8467F;
  font-family: 'Lato', sans-serif;
  font-size: 18px;
  display:flex;
  align-items:center;
  justify-content:center;
  font-weight: bold;
`
const CustomBtn = styled.div`
  height: 35px;
  width: 112px;
  border: 3px solid #565656;
  display:flex;
  align-items:center;
  justify-content:center;
  cursor:pointer;
  border-radius: 4px;
  font-family: 'Lato', sans-serif;
  color: #565656;
  font-weight:bold;
`

const PhoneContainer = styled.div`
  height: 20%;

  width: calc(100% - 30px);
  position:relative;
  display:flex;
  align-items:center;
`
const CustomPhoneNum = styled.div`
  font-family:'Lato',sans-serif;
  font-size: 13px;
  position:absolute;
  left:0;
`
const AddressContainer = styled.div`
  height: 35%;
  width: calc(100% - 30px);
  display;flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
`

const CustomText = styled.div`
  font-family:'Lato',sans-serif;
  font-size:13px;
`