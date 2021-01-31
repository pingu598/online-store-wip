import React, {useEffect, useState} from 'react'
import Container from 'react-bootstrap/Container'
import Navigationbar from './Navigationbar'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {Trash} from 'react-bootstrap-icons'
import Badge from 'react-bootstrap/Badge'

const Basket = () => {
    const [total, setTotal] = useState(0)   //TODO
    const [items, setItems] = useState([])
    let cart = JSON.parse(window.localStorage.getItem('cart'))

    useEffect(()=>{ 
        setItems(cart)   
    },[])
    const deleteItem = (item, index) => {
        const newCart = items.slice()
        newCart.splice(index,1)
        setItems(newCart)
        window.localStorage.setItem('cart', JSON.stringify(newCart))
    }
    
    const CartContent = () => {
        
        if (!cart) {
            return <></>
        }
        return (
        items.map((item, index) => { //TODO: More data on item
            return (              
                <Card className="basketItem" key={index}>
                <Row>
                    <Col>
                        <Card.Img src="/images/empty.jpg" className="basketImage"></Card.Img>
                    </Col>
                    <Col xs={6} className="basketText">
                        <p>{item.item}</p>
                        <Badge pill variant="success">
                            Available
                        </Badge>{' '}
                        
                    </Col>
                    <Col className="basketButtons">
                        <p className="price1">100€</p>
                        <Button variant="success" onClick={()=> deleteItem(item, index)}> 
                            <Trash></Trash>                    
                        </Button>{' '}
                    </Col>
                </Row>
                </Card>                        
                ) 
        })
        )
    }
    return (   
    <> 
    <Navigationbar/> 
    <Container className="basketMargin">
        <h2>Basket</h2>   
    <Row>         
        <CartContent/>
    </Row>  
    <h3 className="price2">Total: {total}€</h3>  
    <Button className="floatRight">Next</Button>  
    </Container> 
    </>
   )
}
export default Basket