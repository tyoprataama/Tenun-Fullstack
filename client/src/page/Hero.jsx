import styled from 'styled-components';
import React from 'react'

const Container = styled.div `
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`
const Heo = styled.h2 `
    font-size: 30px;
    margin-bottom: 20px;
    font-weight: 200;
    margin-bottom: -10px;
`

const Hero = () => {
  return (
    <Container>
        <Heo>Featured Products</Heo>
    </Container>
  )
}

export default Hero