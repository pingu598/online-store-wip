import React, {useState} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import {PersonCircle, Basket2Fill } from 'react-bootstrap-icons'

const Navigationbar = () => {
    const ItemCount = () => {
        //console.log(window.localStorage.getItem('token')) //Debugging for token TODO: Delete 
        let cart = JSON.parse(window.localStorage.getItem('cart'))
        console.log(cart)
        const itemCount = cart != null ? Object.keys(cart).length : null
       
        if (cart != null && Object.keys(cart).length != 0) {         
            return (
                <div className="basketBall">
                    {itemCount}
                </div>
            )
        } else return null
    }

    const LoginName = () => {
        //Rename login button
        const firstName = window.localStorage.getItem('firstName')
        if (firstName != null){
            return firstName
        } else return "Login"
    }

    const Logout = () => {
        window.localStorage.removeItem('token')
        window.localStorage.removeItem('firstName')
    }

    return (      
    <Navbar bg="dark" variant="dark">  
        <Container>  
            <Navbar.Brand href="/">Frontpage</Navbar.Brand>
            <Nav className="mr-auto">                        
                <Nav.Link href="/about">About us</Nav.Link>
            </Nav>

            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form> 

            <Dropdown className="loginDrop">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                   <PersonCircle>                    
                   </PersonCircle>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Form>
                        <Dropdown.Item href="/login">{<LoginName/>}</Dropdown.Item>
                        <Dropdown.Item href="/register">Register</Dropdown.Item>
                        { window.localStorage.getItem('token') != null  
                            ? <Dropdown.Item href="/" onClick={Logout}>Logout</Dropdown.Item>
                            : <></> }                        
                    </Form>
                </Dropdown.Menu>
            </Dropdown>
                           
            <Button variant="success" className="basketButton" href="/basket">
                <Basket2Fill className="basket"></Basket2Fill>           
                <ItemCount/>
            </Button>{' '}                   
        </Container>    
    </Navbar>  
    )
}



export default Navigationbar