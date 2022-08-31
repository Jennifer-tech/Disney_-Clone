import React from 'react';
import styled from "styled-components";

function Login() {
  return (
    <Container>
        <CTA>
            <CTALogoOne src='/images/cta-logo-one.svg' />
            <SignUp>
                GET ALL THERE
            </SignUp>
            <Description>
                Get Premiere access to Raya and the last dragon for with a disney+ subscription. As of 03/26/2022, the price and the Disney bundle will increase by $1.
            </Description>
            <CTALogoTwo src='/images/cta-logo-two.png' />

        </CTA>
        <Wrap>
            <img src="/images/login-background.jpg" alt=''/>
        </Wrap>
    </Container>
  )
}

export default Login

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: top;
    justify-content: center;
    ${'' /* overflow-x: hidden; */}
    

    ${'' /* &:before{
    background-image: url("/images/login-background.jpg") center center / cover no-repeat fixed; 
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    botttom: 0;
    ${'' /* z-index: -10; */}

} */}
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
  opacity: 0.7;
  z-index: -1;
  
`
const CTA = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    align-items: center;
`
const CTALogoOne = styled.img`
    
`
const SignUp = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;
    
    &:hover{
        background: #0483ee;
    }
`
const Description = styled.p`
    font-size:11px;
    text-align: center;
    letter-spacing: 1.5px;
    line-height: 1.5;
`
const CTALogoTwo = styled.img`
    width: 90%;
`