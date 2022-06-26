import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div `
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    background: linear-gradient(
                rgba(255, 255, 255, 0.5),
                rgba(255, 255, 255, 0.5)
            ), 
            url('https://i.ibb.co/gPVpb5C/Login2.png') center;
`;
const Wrapper = styled.div `
    width: 25%;
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
    flex-direction: column;
`;
const Input = styled.input `
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;

`;
const Button = styled.button`
    width: 40%;
    border: 1px solid black;
    padding: 15px 20px;
    background-color: white;
    align-items: center;
    justify-content: center;
    margin-bottom: 5px;
    cursor: pointer;

    &:hover{
        background-color: black;
        color: white;
        transition: all 0.5s ease;
    }
`;
const Link = styled.a`
    margin: 3px 0px;
    font-size: 12px;
    text-decoration: underline; 
    cursor: pointer;
`;

const Login = () => {
  return (
   <Container>
        <Wrapper>
            <Title>LOG IN</Title>
            <Form>
                <Input placeholder='username'/>
                <Input placeholder='password'/>
            <Button>Sign in</Button>
            <Link>Forgotten Password?</Link>
            <Link>Create an account</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login
