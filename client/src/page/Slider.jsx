import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons';
import React, { useState } from 'react'
import styled from 'styled-components';
import { ItemsSlider } from '../data';
import { mobile } from './responsive';

//  Styled sections
const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: #FFF;
    position: relative;
    overflow: hidden;
    ${mobile({display: 'none'})}
`;
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: transparent;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === 'left' && '10px'};
    right: ${props=> props.direction === 'right' && '10px'};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`;
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${props=>props.indexSlide * -100}vw);
    transition: all 1s ease;
`;
const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;
const Image = styled.img `
    height: 80%;
`;
//  aka info container
const ContainerDetail = styled.div `
    flex: 1;
    padding: 50px;
`;
const ImageContainer = styled.div`
    flex: 1;
    height: 100%;
`;
const Title =  styled.h1`
    font-size: 40px;
    font-weight: 300;
`;
const Description = styled.p `
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 300;
`;
const Prgrf = styled.p`
    font-size: 15px;
    font-weight: 200;
`;
const Button = styled.button `
    padding: 20px;
    font-size: 15px;
    font-weight: 400;
    background-color: transparent;
    cursor: pointer;
    border: 1px solid black;

    &:hover {
    background-color: #000;
    color: #fff;
    transition: all 0.5s ease;
  }
`;

const Slider = () => {
    const [indexSlide, setIndexSlide] = useState(0)
    const handleClick = (direction) => {
        if(direction === 'left'){
            setIndexSlide(indexSlide > 0 ? indexSlide - 1 : 2)
        } else {
            setIndexSlide(indexSlide > 2 ? indexSlide + 1 : 0)
        }
    };
  return (
    <Container>
        <Arrow direction='left' onClick={()=>handleClick('left')}>
            <ArrowBackIosOutlined/>
        </Arrow>
        <Wrapper indexSlide={indexSlide}>
            {/* map item from data.js */}
            {ItemsSlider.map((item)=>(
                <Slide bg={item.bg} key={item.id}>
            <ImageContainer>
                <Image src={item.img}/>
            </ImageContainer>
            <ContainerDetail>
                <Title>{item.title}</Title>
                <Description>
                    {item.headdesc}
                    <Prgrf>{item.desc}</Prgrf>
                </Description>
                <Button>SHOP THE LOOK</Button>
            </ContainerDetail>
            </Slide>
            ))};

        </Wrapper>
         <Arrow direction='right' onClick={()=>handleClick('right')}>
            <ArrowForwardIosOutlined/>
        </Arrow>
    </Container>
  )
}

export default Slider