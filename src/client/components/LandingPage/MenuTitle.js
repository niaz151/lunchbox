import React from 'react';
import styled from 'styled-components';

const MenuTitle = () => (
  <MenuDescHero>
    <MenuDescSpan> FIND YOUR NEAREST </MenuDescSpan>
    <MenuDescSpan> 16 HANDLES! </MenuDescSpan>
  </MenuDescHero>
)

const MenuDescHero = styled.div`
  height: 60%;
  width: 100%;
  display:flex;
  flex-direction: column;
  align-items:flex-start;
  justify-content: center;
`
const MenuDescSpan = styled.div`
  margin-left: 15px;
  font-family: 'Lato',sans-serif;
  font-size:24px;
  font-weight:700;
  color: #565656;
  margin-top:10px;
`


export default MenuTitle;