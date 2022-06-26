import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { productsHome } from '../data';
import ProductItem from './ProductItem';
import axios from 'axios';

//  Styled sections
const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({category, filters, sort}) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(category ? `http://localhost:5001/api/products?category=${category}` 
        : 'http://localhost:5001/api/products');
        setProducts(response.data);
      } catch (error) {}
    };
    getProducts()
    }, [category]);
//  Filtered
    useEffect(()=>{
      category && setFilteredProducts(
        products.filter((item)=>
        Object.entries(filters).every(([key, value]) =>
          item[key].includes(value)
          )
        )
      );
    }, [products, category, filters]);
    useEffect(()=>{
      if (sort === 'newest'){
        setFilteredProducts(previous=>
          [...previous].sort((x, y) => x.createdAt - y.createdAt));
      } else if (sort === 'low') {
        setFilteredProducts(previous => 
          [...previous].sort((x, y) => x.price - y.price));
      } else {
         setFilteredProducts(previous => 
          [...previous].sort((x, y) => y.price - x.price));
      }
    }, [sort])
  return (
    <Container>
        {category 
        ? filteredProducts.map((item)=> <ProductItem item={item} key={item.id}/>)
        : productsHome.slice(0, 8).map((item) => <ProductItem item={item} key={item.id}/>)}
    </Container>
  )
}

export default Products