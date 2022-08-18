import React from 'react';
import styled from "styled-components";



function Header() {
  return (
    <Nav>
      <Logo src='/images/logo.svg' />
      <NavMenu>
      <a>
        <img src='/images/home-icon.svg' alt='home-icon'/>
        <span>HOME</span>
      </a>

      <a>
        <img src='/images/search-icon.svg' alt='home-icon'/>
        <span>SEARCH</span>
      </a>

      <a>
        <img src='/images/watchlist-icon.svg' alt='home-icon'/>
        <span>WATCHLIST</span>
      </a>

      <a>
        <img src='/images/original-icon.svg' alt='home-icon'/>
        <span>ORIGINALS</span>
      </a>

      <a>
        <img src='/images/movie-icon.svg' alt='home-icon'/>
        <span>MOVIES</span>
      </a>

      <a>
        <img src='/images/series-icon.svg' alt='home-icon'/>
        <span>SERIES</span>
      </a>

      </NavMenu>
      
      <NavImg src='/images/myPhoto.jpg' />
      
      

    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0px 36px;
  ${'' /* justify-content: space-around; */}
`
const Logo = styled.img`
  width: 80px;
  ${'' /* padding-top: 10px; */}
`
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  ${'' /* padding: 0px 25px; */}
  flex: 1;
  margin-left: 25px;
  cursor: pointer;

  a{
    display: flex;
    align-items: center;
    padding: 0px 12px;
  

    img{
      height: 20px;

    }

    span{
      font-size: 13px;
      letter-spacing: 1.5px;
      position: relative;

      &:after{
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        ${'' /* top: 0; */}
        left: 0;
        right: 0;
        bottom: -4px;
        opacity: 0;
        transform-origin: left right;
        transition: all 250ms cubic-bezier(0.25, 0.46. 0.45, 0.94) 0s;
        transform: scaleX(0)
      }
    }

    &:hover{
      span:after{
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
  
`
const NavImg = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  cursor: pointer;
`