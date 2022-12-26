import React from 'react'
import styled from 'styled-components'
import { mobile } from '../Responsive'

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="name"/>
                <Input placeholder="last name"/>
                <Input placeholder="username"/>
                <Input placeholder="email"/>
                <Input placeholder="password"/>
                <Input placeholder="confirm password"/>
                <Agreement>
                    By creating an account, I consent jkhgkjgkjsgdkjsahgdjhgdjhgjhgjhhjjhjhjhkgjhfhgfhgfhfh <strong>PRIVATE POLICY</strong>
                </Agreement>
                <Button type='submit'>CREATE</Button>
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
    background-color: purple;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Wrapper = styled.div`
    padding: 20px;
    width: 40%;
    background-color: white;
    ${mobile({width: "75%"})}
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    text-align: center;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 15px;
    font-size: 1.3rem;
`
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0;;
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    margin: 20px 0 0 0;
    cursor: pointer;
`


export default Register