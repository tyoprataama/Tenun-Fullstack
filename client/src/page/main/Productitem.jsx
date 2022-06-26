import React, { useState } from 'react';
import styled from 'styled-components';
import Info from '../Info';
import Navbar from '../Navbar';
import Products from '../Products';
import News from '../News';
import Footer from '../Footer';
import Copyright from '../Copyright';
import { mobile } from '../responsive';
import { useLocation } from 'react-router-dom'

const Container = styled.div`

`;
const FilterWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div `
  margin: 20px;
  ${mobile({width: '0px 20px', display: 'flex', flexDirection: 'column'})}
`;
const FilterTxt = styled.span`
  font-size: 20px;
  font-weight: 300;
  margin-right: 20px;
   ${mobile({marginRight: '0px'})}

`;
const Title = styled.h1 `
  margin: 20px;
  font-size: 30px;
  font-weight: 400;
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
   ${mobile({margin: '10px 0px'})}
`;
const Options = styled.option`
`;

const Productitem = () => {
  const location = useLocation();
  const category = location.pathname.split('/')[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState('newest');
  
  const handlerFilter = (h) => {
    const value = h.target.value;
    setFilters({
      ...filters,
      [h.target.name]: value
    });
  };
  return (
    <Container>
      <Navbar/>
      <Info/>
      <Title>{category}</Title>
      <FilterWrap>
        <Filter>
          <FilterTxt>Filter Product:</FilterTxt>
          <Select name='color' onChange={handlerFilter}>
            <Options disabled>Color</Options>
            <Options>white</Options>
            <Options>black</Options>
            <Options>white</Options>
            <Options>brown</Options>
            <Options>gray</Options>
            <Options>blue</Options>
          </Select>
           <Select name='size' onChange={handlerFilter}>
            <Options disabled selected>Size</Options>
            <Options>XS</Options>
            <Options>S</Options>
            <Options>M</Options>
            <Options>L</Options>
            <Options>XL</Options>
          </Select>
        </Filter>
        <Filter>
          <FilterTxt>Sort Product:</FilterTxt>
          <Select onChange={(h) => setSort(h.target.value)}>
            <Options value='newest'>Newest</Options>
            <Options value='low'>Price (Low to High)</Options>
            <Options value='high'>Price (High to Low)</Options>
          </Select>
        </Filter>
      </FilterWrap>
      <Products category={category} filters={filters} sort={sort}/>
      <News/>
      <Footer/>
      <Copyright/>
    </Container>
  )
}

export default Productitem