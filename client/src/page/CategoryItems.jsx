import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from './responsive';

//  Styled sections
const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`;
const Image = styled.img `
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({height: '30vh'})}
`;
const Title = styled.h1 `
    color: #fff;
    margin-bottom: 20px;
    font-weight: 600;
`;
const Detail = styled.div `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Button = styled.button `
    border: none;
    padding: 10px 20px;
    background-color: white;
    color: black;
    cursor: pointer;
    font-weight: 700;

    &:hover {
    background-color: #000;
    color: #fff;
    transition: all 0.5s ease;
`;

const CategoryItems = ({item}) => {
  return (
    <Container>
        <Link to={`/products/${item.category}`}>
        <Image src={item.img}/>
        <Detail>
            <Title>{item.title}</Title>
            <Button>EXPLORE</Button>
        </Detail>
        </Link>
    </Container>
  )
}

export default CategoryItems