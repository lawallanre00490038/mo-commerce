import React from 'react'
import styled from 'styled-components'
import { mobile } from '../Responsive'

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="username"/>
                <Input placeholder="password"/>
                <Input placeholder="username"/>
                <Button type='submit'>LOGIN</Button>
                <Link>DO NOT REMEMBER PASSWORD?</Link>
                <Link>CREATE A NEW ACCOUNT</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    // background: linear-gradient(
    //     rgba(255, 255, 255, 0.5),
    //     rgba(255, 255, 255, 0.5)
    // ),
    // url('../../public/images/lanre1.v2.jpg') center;
    // background-size: cover;
    background-color: purple;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Wrapper = styled.div`
    padding: 20px;
    width: 25%;
    background-color: white;
    ${mobile({width: "75%"})}
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    text-align: center;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0;
    padding: 15px;
    font-size: 1.3rem;
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    margin: 20px 0 0 0;
    cursor: pointer;
    margin-button: 10px;
`
const Link = styled.a`
    margin: 5px 0;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`

export default Login