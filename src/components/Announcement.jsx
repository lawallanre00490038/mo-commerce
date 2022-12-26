import React from 'react'
import styled from 'styled-components'

const Announcement = () => {
  return (
    <Container>
        Super Deal! free Shipping on Orders Over 50$
    </Container>
  )
}

const Container = styled.div`
    height: 50px;
    background-color: teal;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: 500;
`

export default Announcement