import { Badge } from '@material-ui/core';
import { Search, WorkOutlineSharp } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from './responsive';

//  Styled sections
const Container = styled.div`
    height: 60px;
    background-color: #fff;
    ${mobile({height: '50px'})}
    }
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    color: #000;
    display: flex;
    justify-content: space-between;
    ${mobile({padding: '10px 0px'})}
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;
const Center = styled.div `
    flex: 1;   
    text-align: center;
`;
const Right = styled.div `
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({justifyContent: 'center', flex: 2})}
`;
const Language = styled.span`
    font-size: 14;
    cursor: pointer;
    ${mobile({display: 'none'})}
`;
const SearchContainer = styled.div`
    border: 0.5px solid black;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    cursor: pointer;
`;
const Input = styled.input`
    border: none;
    ${mobile({width: '50px'})}
`;
const Logo = styled.h1`
    font-weight: 400;
    cursor: pointer;
    letter-spacing: 3px;
    text-decoration: none;
    ${mobile({fontSize: '24px'})}

    &:hover {
    color: #C4C4C4;
    transition: all 0.5s ease;
`;
const ItemMenu = styled.div`
    font-size: 14;
    cursor: pointer;
    margin-left: 25px;
    align-items: center;
    ${mobile({fontSize: '12px', marginLeft: '10px'})}
`;
const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  &:hover {
    color: #C4C4C4;
    transition: all 0.5s ease;
`;

//  Our Navbar
const Navbar = () => {
    const quantity = useSelector(state=>state.cart.quantity)
  return (
    <Container>
        <Wrapper>
            {/* Left sections */}
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input placeholder='Search'/>
                    <Search style={{ color: 'black', fontSize: 20 }} />
                </SearchContainer>
            </Left>
            {/* Center sections */}
            <Center>
                <Logo>
                   <StyledLink to='/'>Tenun.</StyledLink>
                </Logo>
            </Center>
            {/* Right sections */}
            <Right>
                <StyledLink to='/signup'>
                <ItemMenu>SIGN UP</ItemMenu>
                </StyledLink>
                <StyledLink to='/login'>
                <ItemMenu>LOG IN</ItemMenu>
                </StyledLink>
                <ItemMenu>
                    <Badge badgeContent={quantity} color='primary'>
                    <StyledLink to='/cart'>
                    <WorkOutlineSharp/>
                    </StyledLink>
                    </Badge>
                </ItemMenu>
            </Right>

        </Wrapper>
    </Container>
  )
}

export default Navbar