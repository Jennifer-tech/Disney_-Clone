import React from 'react';
import styled from "styled-components";
import ImageSlider from "./ImageSlider";
import Viewers from "./Viewers";
import Movies from "./Movies"

function Home() {
  return (
    <Container>
      <ImageSlider />
      <Viewers />
      <Movies />
      <Wrap>
        <img src="/images/home-background.png" alt="home-background"/>
      </Wrap>
      
    </Container>
  )
}

export default Home

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  overflow-x: hidden;
  ${'' /* position: relative; */}

  ${'' /* &:before {
    background: url("/images/home-background.png") center center / cover no-repeat fixed; 
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    botttom: 0;
    z-index: -1;

  }  */}
` 
const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
  position: fixed;
  background-repeat: no-repeat;
  top: 0;
  left: 0;
  right: 0;
  botttom: 0;
  z-index: -1;
  
`