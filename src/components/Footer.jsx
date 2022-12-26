import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../Responsive'

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>MO'ADUNNI EMPIRE</Logo>
            <Desc>
                This is just the beginning of a site that is made of react and nodejs. Nodejs is usd for the backend while react is used for the front end. That is while we do use to have the web and the server to the impossible.
            </Desc>
            <SocialContainer>
                <SocialIcon bg="#4267B2">
                    <Facebook />
                </SocialIcon>
                <SocialIcon bg="purple">
                    <Instagram />
                </SocialIcon>
                <SocialIcon bg="#1DA1F2">
                    <Twitter />
                </SocialIcon>
                <SocialIcon bg="#E60023">
                    <Pinterest />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <Room style={{marginRight: "10px"}}/>3, Abina, Surulere, Lagos.
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight: "10px"}}/>+234-7013957216
            </ContactItem>
            <ContactItem>
                <MailOutline style={{marginRight: "10px"}}/>lawallanre49@gmail.com
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    ${mobile({flexDirection: "column"})}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1`

`
const Desc = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
    ${mobile({justifyContent: "center"})}
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: ${props => props.bg};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    cursor: pointer;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display: "none"})}
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({backgroundColor: "#fff8f8"})}
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
`
const Payment = styled.img`
    width: 50%;
    cursor: pointer;
`
export default Footer