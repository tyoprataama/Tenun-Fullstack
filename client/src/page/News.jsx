import { Send } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';
import { mobile } from './responsive';

//  Styled sections
const Container = styled.div`
  height: 60vh;
  background-color: #000;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${mobile({padding: '10px'})}
`;
const Title = styled.h1 `
  font-size: 35px;
  margin-bottom: 20px;
  font-weight: 300;
`;
const Descriptions = styled.div `
  font-size: 20px;
  font-weight: 200;
  margin-bottom: 20px;
  ${mobile({textAlign: 'center'})}
`;
const InputContainer = styled.div `
  width: 50%;
  height: 40px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({width: '70%'})}
`;
const Input = styled.input `
  border: none;
  flex: 8;
  padding-left: 20px;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #000;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #c4c4c4;
    color: #000;
    transition: all 0.5s ease;
  }
`;

const News = () => {
  return (
    <Container>
      <Title>NOTIFICATIONS</Title>
      <Descriptions>Get timely updates from your favorite products.</Descriptions>
      <InputContainer>
        <Input placeholder='Your Email'/>
        <Button>
          <Send/>
        </Button>
      </InputContainer>
    </Container>
  )
}

export default News