import React from 'react';
import styled from "styled-components";

function Detail() {
  return (
    <Container>
        <Background>
            <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4418A64790641AC1655338F7BC9FB1B63DDA28503EC8626D635CC2E8A248FE2E/scale?width=2880&aspectRatio=1.78&format=jpeg' alt=''/>
        </Background>
        <ImageTitle>
            <img src='https://media.wdwnt.com/2019/02/the-lion-king-celebration-coming-this-summer-to-disney-california-adventure-park-featured.jpg' alt=''/>
        </ImageTitle>
        <Controls>
            <PlayButton>
                <img src='/images/play-icon-black.png' alt=''/>
                <span>PLAY</span>
            </PlayButton>
            <TrailerButton>
                <img src='/images/play-icon-white.png' alt=''/>
                <span>TRAILER</span>
            </TrailerButton>
            <AddButton>
                <span>+</span>
            </AddButton>
            <GroupButton>
                <img src='/images/group-icon.png' alt=''/>
            </GroupButton>
        </Controls>
        <SubTitle>
            2019 <span>.</span> 7m <span>.</span> Family, Fantasy, Kids, Animation
        </SubTitle>
        <Description>
        A young lion named Simba, who is the crown prince of an
African Savanna. When his father dies in an accident staged by his uncle, Simba is made to
feel responsible for his father's death and must overcome his fear of taking responsibility as
the rightful heir to the throne.
        </Description>

    </Container>
  )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    ${'' /* position: relative; */}
`
const Background = styled.div`
    position: fixed;
    ${'' /* justify-content: center;
    align-items: center; */}
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.8;
    
    img{
        width: 100%;
        height:100%;
        object-fit: cover;

    }

`
const ImageTitle = styled.div`
    margin: 40px 0 20px 0;
    height: 30vh;
    min-height: 170px;
    width: 35vw;
    min-width: 200px;
    overflow: hidden;

    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
        border-radius: 6px;
    }
`
const Controls = styled.div`
    display: flex;
    align-items: center;
`
const PlayButton = styled.button`
    display: flex;
    height: 56px;
    border-radius: 4px;
    border: none;
    background: rgb(249, 249, 249);
    align-items: center;
    padding: 0 24px;
    margin-right: 22px;
    font-weight: 550;
    outline: none;
    letter-spacing: 1.8px;
    cursor: pointer;

    &:hover{
        background: rgb(198, 198, 198)
    }


`
const TrailerButton = styled(PlayButton)`
    background: rgba(0, 0, 0, 0.3);
    border:1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
    
`
const AddButton = styled.button`
    height: 44px;
    width: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.6);
    border:2px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
    border-radius: 50%;
    margin-right: 16px;
    cursor: pointer;

    span{
        
        font-size: 30px;
        color: white;
    }
`
const GroupButton = styled(AddButton)`
    background: black;
`
const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;

    span{
        font-size: 30px;
        align-items: center;
        justify-content: center;
    }
`
const Description = styled.div`
    color: rgb(249, 249, 249);
    font-size: 20px;
    margin-top: 18px;
    line-height: 1.4;
    max-width: 760px;
`