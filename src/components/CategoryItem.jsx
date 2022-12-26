import React from 'react'
import styled from 'styled-components'
import { mobile } from '../Responsive';

const CategoryItem = (props) => {
    
    const { category } = props;

  return (
    <Container>
        <Image src={category.img}/>
        <Info>
            <Title>{category.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
    </Container>
  )
}

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({height: "30vh"})}
`
const Info = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
`
const Button = styled.button`
    border: none;
    padding: 10px;
    cursor: pointer;
`
export default CategoryItem;