import React from 'react';
import styled from 'styled-components';

const Container = styled.div `
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    color: #000;
`
const Copyrights = styled.h4`
    text-align: center;
    width: 100%;    
    font-weight: 200;
`;

const Copyright = () => {
  return (
      <Container>
          <Copyrights>@2022 Tenun. All rights reserved.</Copyrights>
      </Container>
  )
}

export default Copyright