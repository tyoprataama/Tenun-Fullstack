import { Email, GitHub, Instagram, LinkedIn, Phone, Room, Twitter } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { mobile } from './responsive';

//  Styled sections
const Container = styled.div`
    display: flex;
    ${mobile({flexDirection: 'column'})}
`;
const Left = styled.div `
    flex: 1;
    flex-direction: column;
    padding: 20px;
`;
const Center = styled.div `
    flex: 1;
    padding: 20px;
    ${mobile({display: 'none'})}
`;
const Right = styled.div `
    flex: 1;
    padding: 20px;
    ${mobile({backgroundColor: '#c4c4c4'})}
`;
const Logo = styled.h1`
    font-weight: 400;
    cursor: pointer;
    letter-spacing: 3px;

    &:hover {
    color: #C4C4C4;
    transition: all 0.5s ease;
`;
const Description = styled.div`
    margin: 20px 0px;
    font-weight: 300;
`;
const Sosmed = styled.div`
    display: flex;
    cursor: pointer;
`;
const SosmedIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #fff;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;
const Title = styled.h3`
    margin-bottom: 30px
    font-weight: 200;
    margin-bottom: 15px;
    font-size: 15px;
`;
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    font-weight: 300;
`;
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    cursor: pointer;

    &:hover {
        color: #c4c4c4;
    }
`;
const Contact = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;
const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Tenun.</Logo>
            <Description>Tenun is a prototype platform for local sellers from Kediri City who wants to increase their business sales, especially in the apparel Batik sector. Made by love @ty000o who owned @numphy.ui</Description>
            <Sosmed>
                <SosmedIcon color = '1DA1F2'>
                   < Twitter />
                </SosmedIcon>
                <SosmedIcon color = 'E1306C'>
                    < Instagram />
                </SosmedIcon>

                 <SosmedIcon color='0072b1'>
                    <LinkedIn />
                </SosmedIcon>

                 < SosmedIcon color = '171515' >
                    < GitHub />
                </SosmedIcon>
            </Sosmed>
            
        </Left>
        <Center>
            <Title>NAVIGATE</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Men</ListItem>
                <ListItem>Women</ListItem>
                <ListItem>Goods</ListItem>
                <ListItem>My Orders</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Favorite</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>GET IN TOUCH</Title>
            <Contact><Room style={{marginRight:'10px'}}/> Kediri, East Java, INA</Contact>
             <Contact> <Phone style={{marginRight:'10px'}}/> 0354 123 123</Contact>
              <Contact><Email style={{marginRight:'10px'}}/> tyoprataama004@gmail.com</Contact>
              <Payment src='https://i.ibb.co/Qfvn4z6/payment.png'/>
        </Right>
    </Container>
  )
}

export default Footer
