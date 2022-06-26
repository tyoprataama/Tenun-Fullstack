import React from 'react'
import styled from 'styled-components';
import { categoriesBig } from '../data';
import CategoryItems from './CategoryItems';
import { mobile } from './responsive';

const Container = styled.div`
    display: flex;
    padding: 20px;
    margin-top: 0px;
    ${mobile({padding: '0px'})}
`;

const CategoriesBig = () => {
  return (
    <Container>
        {categoriesBig.map((item)=>(
            <CategoryItems item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default CategoriesBig