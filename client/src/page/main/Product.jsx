import { Add, Remove } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import Copyright from "../Copyright";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../requestMethod";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/ReduxCart.js";
import styled from "styled-components";
import Footer from "../Footer";
import Info from "../Info";
import Navbar from "../Navbar";
import News from "../News";

const Container = styled.div`
`;
const Wrap = styled.div `
    padding: 20px;
    display: flex;
     ${mobile({flexDirection: 'column', padding: '10px'})}
`;
const ImgContainer = styled.div `
    flex: 1;
`;
const Image = styled.img `
    width: 80%;
    height: 70vh;
    object-fit: cover;
     ${mobile({height: '40vh'})}
`;
const InfoContainer = styled.div `
    flex: 1;
    padding: 0px 50px;
     ${mobile({padding: '10px'})}
`;
const Title = styled.h1 `
    font-weight: 200;
`;
const Descriptions = styled.p `
    margin: 20px 0px;
    font-weight: 400;
`;
const Desc = styled.p`
    font-weight: 200;
`
const Price = styled.span `
    font-weight: 100;
    font-size: 40px;
`;
const FilterWrap = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin: 30px 0px;
     ${mobile({width: '100%'})}
`;
const Filter = styled.div `
    display: flex;
    align-items: center;
`;
const FilterColor = styled.div `
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    border: solid 0.5px black;
    margin: 0px 5px;
    cursor: pointer;
`;
const FilterTitle = styled.span `
    font-size: 20px;
    font-weight: 200;
`;
const FilterSize = styled.select `
    margin-left: 10px;
    padding: 5px;

`;
const FilterOption = styled.option `
`;
const Increase = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
     ${mobile({width: '100%'})}
`;
const AmountWrap = styled.div `
    display: flex;
    align-items: center;
    font-weight: 500;
    cursor: pointer;
`;
const Amount = styled.span `
    width: 30px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 25px;
`;
const Button = styled.button`
    padding: 10px 60px;
    border: 1px solid black;
    cursor: pointer;
    color: black;
    background-color: white;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;

    &:hover {
    background-color: black;
    color: white;
    transition: all 0.5s ease;
    }
`;
const ImgSize = styled.img`
    width: 70%;
`
//  LAST PART IS product.title below see ya
const Product = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const dispatch = useDispatch();

  useEffect(()=>{
      const getProduct = async () => {
          try{
              const response = await publicRequest.get('/product/find/'+id);
              setProduct(response.data);
          } catch {}
      };
      getProduct()
  }, [id]);
  const handlerQuantity = (type) =>{
    if(type === 'decrease'){
        quantity>1 && setQuantity(quantity - 1);
    } else{
        setQuantity(quantity + 1);
    }
  }
  const handlerClick = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
  };
  return (
    <Container>
        <Navbar/>
        <Info/>
        <Wrap>
            <ImgContainer>
                <Image src={product.img}/>
            </ImgContainer>
            <InfoContainer>
                <Title>{product.title}</Title>
                <Descriptions>{product.description}</Descriptions>
                <Desc>32-MSDF-2343</Desc>
                <Price>Rp {product.price}</Price>
                <FilterWrap>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        {product.color?.map((c) => (
                            <FilterColor color={c} key={c} onClick={()=>setColor(c)}/>
                        ))}
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize onChange={(e)=>setSize(e.target.value)}>
                            {product.size?.map((s)=> (
                            <FilterOption key={s}>{s}</FilterOption>
                            ))}
                        </FilterSize>
                    </Filter>
                </FilterWrap>

                <Increase>
                    <AmountWrap>
                        <Remove onClick={()=>handlerQuantity('decrease')}/>
                        <Amount>{quantity}</Amount>
                        <Add onClick={()=>handlerQuantity('increase')}/>
                    </AmountWrap>
                    <Button onClick={handlerClick}>ADD</Button>
                </Increase>
                <Descriptions>DETAILS:</Descriptions>
                <Desc>Men standard shirt with straight cutting (non-body fit).
                Suitable for casual or formal occasion.
                Fabrics of cotton hand-dyed Batik, ethically made in Indonesia.</Desc>
                <Descriptions>SIZE & FIT INFORMATION (cm):</Descriptions>
                <ImgSize src='https://i.ibb.co/wRcs4xc/Size.png'/>
            </InfoContainer>
        </Wrap>
        <News/>
        <Footer/>
        <Copyright/>
    </Container>
  )
}

export default Product;