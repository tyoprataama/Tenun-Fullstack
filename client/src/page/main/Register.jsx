import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div `
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(
                rgba(255, 255, 255, 0.5),
                rgba(255, 255, 255, 0.5)
            ), 
            url('https://i.ibb.co/ySnqDQq/Login3.png') center;
`;
const Wrapper = styled.div `
    width: 40%;
    padding: 20px;
    background-color: white;
     ${mobile({width: '75%'})}
`;
const Title = styled.h1 `
    font-size: 24px;
    font-weight: 300;
`;
const Form = styled.form `
    display: flex;
    flex-wrap: wrap;
`;
const Input = styled.input `
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;

`;
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`;
const Button = styled.button`
    width: 40%;
    border: 1px solid black;
    padding: 15px 20px;
    background-color: white;
    align-items: center;
    justify-content: center;

    &:hover{
        background-color: black;
        color: white;
        transition: all 0.5s ease;
    }
`;

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder='name'/>
                <Input placeholder='last name'/>
                <Input placeholder='username'/>
                <Input placeholder='email'/>
                <Input placeholder='password'/>
                <Input placeholder='confirm password'/>
                <Agreement>By creating an account, you agree to the Tenun
            Conditions of Use & Sale. Please see our 
            <b> Privacy Policy</b>, our Cookies Notice and our 
            Interest-Based Ads Notice.</Agreement>
            <Button>Sign Up</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register
