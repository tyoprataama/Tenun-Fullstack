import { FavoriteBorder, Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

//  Styled sections
const Details = styled.div `
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.2);
  z-index: 4;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;
const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:hover ${Details} {
    opacity: 1;
  }
`;
const Round = styled.div`
  width: 200px;
  height: 200px
  border-radius: 50%;
  background-color: #fff;
  position: absolute;
`;
const Icon = styled.div`
  width: 80px
  height: 80px;
  padding: 10px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;

  &:hover {
    background-color: #F3F2F2;
    transform: scale(1.1);
  }
`;
const Image = styled.img`
  height: 75%;
  object-fit: cover;
  z-index: 2;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;
const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  width: 80px
  height: 80px;
`;

const ProductItem = ({item}) => {
  return (
    <Container>
      <Round/>
        <Image src={item.img}/>
        <Details>

          <Icon>
            <ShoppingCartOutlined/>
          </Icon>

          <Icon>
            <StyledLink to={`/product/${item._id}`}>
            <Search/>
            </StyledLink>
          </Icon>

          <Icon>
            <FavoriteBorder/>
          </Icon>

        </Details>
    </Container>
  )
}

export default ProductItem
