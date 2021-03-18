import React, {useEffect, useState} from 'react'
import Container from 'react-bootstrap/Container'
import Navigationbar from './Navigationbar'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {Trash} from 'react-bootstrap-icons'
import Badge from 'react-bootstrap/Badge'
import {useSpring, animated} from 'react-spring'

const Basket = () => {
    const [items, setItems] = useState([])
    let cart = JSON.parse(window.localStorage.getItem('cart'))
    
    useEffect(()=>{ 
        setItems(cart)  
        //Doesn't need dependency yet
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const countTotal = () => {
        const tot = items.map(item => item.item.price)
        return tot.reduce((a, b) => a + b, 0) 
    }
    const deleteItem = (item, index) => {
        const newCart = items.slice()
        newCart.splice(index,1)
        setItems(newCart)
        window.localStorage.setItem('cart', JSON.stringify(newCart))
    }

    const Available = ({itemStock}) => {
        const style = () => {
            if(itemStock === 0) return "danger"
            else if (itemStock > 0 && itemStock < 5) return "warning"
            else return "success"
        }
        return (
        <Badge pill variant={style()}>
            {itemStock} available
        </Badge>
        ) 
    }
    
    const CartContent = () => {
        if (!cart) {
            //TODO More info
            return <></>
        }
        return (
        items.map(({ item }, index) => { //TODO: More data on item   
            return (            
                <Card className="basketItem" key={index}>
                <Row>
                    <Col>
                        <Card.Img src="/images/empty.jpg" className="basketImage"></Card.Img>
                    </Col>
                    <Col xs={6} className="basketText">
                        <p>{item.name}</p>
                        <Available itemStock={item.available}/>
                        
                    </Col>
                    <Col className="basketButtons">
                        <p className="price1">{item.price}€</p>
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
    const props = useSpring({opacity: 1, from: {opacity: 0}})
    return (   
    <>
    <Navigationbar/> 
    <Container className="basketMargin">
        <animated.div style={props}>
        <h2>Basket</h2>   
        <Row>               
          <CartContent/>   
        </Row>  
        <h3 className="price2">Total: {countTotal()}€</h3>  
        <Button className="floatRight">Next</Button>  
        </animated.div>   
    </Container> 
    </>
   )
}
export default Basket