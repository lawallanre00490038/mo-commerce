import React from 'react'
import { popularProducts } from '../data'
import Product from './Product'
import styled from 'styled-components'

export const Products = () => {
  return (
    <Container>
        {popularProducts.map(product => (
            <Product product={product} key={product.id}/>
        ))}
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    padding: flex;
    flex-wrap: wrap;
    justify-content: space-betweeen;
`