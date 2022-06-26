import { Add, Remove } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import Footer from '../Footer';
import Info from '../Info';
import Navbar from '../Navbar';
import Copyright from '../Copyright';
import { mobile } from '../responsive';

const Container = styled.div`
`;
const Wrapper = styled.div`
    padding: 20px
    ${mobile({padding: '10px'})}
`;
const Title = styled.h1 `
    font-weight: 300;
    text-align: center;
`;
const Top = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;
const TopBtn = styled.button `
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=>props.type === 'filled' && 'none'};
    background-color: ${(props)=>
        props.type === 'filled' ? 'black' : 'transparent'};
    color: ${(props)=>props.type === 'filled' && 'white'};
`;
const TopTxtWrap = styled.div`
 ${mobile({display: 'none'})}
`;
const TopTxt = styled.span `
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;
const Bottom = styled.div `
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: 'column'})}
`;
const Inform = styled.div `
    flex: 3;
`;
const Product = styled.div `
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: 'column'})}
`;
const Image = styled.img `
    width: 200px;
`;
const Details = styled.div `
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
const ProductName = styled.span `
`;
const ProductDetail = styled.div `
    flex: 2;
    display: flex;
`;
const ProductId = styled.span `
`;
const ProductColor = styled.div `
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    border: 1px solid black;
`;
const ProductSize = styled.span `
`;
const Price = styled.div `
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const ProductPrice = styled.div `
    font-size: 30px;
    font-weight: 200;
    ${mobile({marginBottom: '20px'})}
`;
const ProductTotalContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;
const ProductTotal = styled.div `
    font-size: 24px;
    margin: 5px;
    ${mobile({margin: '5px 15px'})}
`;
const Line = styled.hr`
    background-color: black;
    border: none;
    height: 0.5px;
`;
const Summary = styled.div `
    flex: 1;
    border: 0.5px solid black;
    padding: 20px;
    height: 50vh;
    border-radius: 5px;
    ${mobile({border: 'none'})}

`;
const SummaryTitle = styled.h1`
    font-weight: 300;
`;
const SummaryItem = styled.div `
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === 'total' && '500'};
    font-size: ${props=>props.type === 'total' && '20px'};
`;
const SummaryItemTxt = styled.span `
`;
const SummaryPrice = styled.span `
`;
const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: white;
    border: 1px solid black;
    cursor: pointer;

    &:hover {
        background-color: black;
        color: white;
        transition: all 0.5s ease;
    }
`;
const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Info/>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopBtn>ADD SOMETHING ELSE</TopBtn>
                <TopTxtWrap>
                    <TopTxt>Shopping Bag(3)</TopTxt>
                    <TopTxt>Your Favorite</TopTxt>
                </TopTxtWrap>
            <TopBtn type='filled'>PROCEED TO CHECKOUT</TopBtn>
            </Top>
            <Bottom>
                <Inform>

                    <Product>
                        <ProductDetail>
                            <Image src='https://i.ibb.co/93C9NkX/Details1.png'/>
                            <Details>
                                <ProductName><b>PRODUCT: </b>Standard Short Sleeves Shirt - Blue Buds on Gray</ProductName>
                                <ProductId><b>SERIES: </b>32-MSDF-2343</ProductId>
                                <ProductColor color='gray'/>
                                <ProductSize><b>SIZE: </b> XL</ProductSize>
                            </Details>
                        </ProductDetail>
                        <Price>
                            <ProductTotalContainer>
                                <Remove/>
                                <ProductTotal>1</ProductTotal>
                                <Add/>
                            </ProductTotalContainer>
                            <ProductPrice>Rp 69.000</ProductPrice>
                        </Price>
                    </Product>

                    <Line/>

                    <Product>
                        <ProductDetail>
                            <Image src='https://i.ibb.co/d7V04h7/Details2.png'/>
                            <Details>
                                <ProductName><b>PRODUCT: </b>Standard Short Sleeves Shirt - Blooming Red Kawung</ProductName>
                                <ProductId><b>SERIES: </b>32-MSAD-2332</ProductId>
                                <ProductColor color='maroon'/>
                                <ProductSize><b>SIZE: </b> XL</ProductSize>
                            </Details>
                        </ProductDetail>
                        <Price>
                            <ProductTotalContainer>
                                <Remove/>
                                <ProductTotal>1</ProductTotal>
                                <Add/>
                            </ProductTotalContainer>
                            <ProductPrice>Rp 69.000</ProductPrice>
                        </Price>
                    </Product>
                </Inform>

                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemTxt>Subtotal</SummaryItemTxt>
                        <SummaryPrice>Rp 138.000</SummaryPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemTxt>Estimated Shipping</SummaryItemTxt>
                        <SummaryPrice>Rp 18.000</SummaryPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemTxt>Discount</SummaryItemTxt>
                        <SummaryPrice>- Rp 8.000</SummaryPrice>
                    </SummaryItem>
                    <SummaryItem type='total'>
                        <SummaryItemTxt>Total</SummaryItemTxt>
                        <SummaryPrice>Rp 148.000</SummaryPrice>
                    </SummaryItem>
                    <Button>CHECKOUT</Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
        <Copyright/>
    </Container>
  )
}

export default Cart