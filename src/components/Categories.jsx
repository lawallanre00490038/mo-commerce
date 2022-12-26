import React from 'react'
import CategoryItem from './CategoryItem'
import { categories } from '../data'
import styled from 'styled-components'
import { mobile } from '../Responsive'

const Categories = () => {
  return (
    <Container>
        {categories.map(category=> (
          <CategoryItem category={category} key={category.id}/>
        ))}
    </Container>
  )
}


const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({padding: "0px", flexDirection: "column"})}
`
export default Categories