import React from 'react'
import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {Basket} from 'react-bootstrap-icons'
import {useSpring, animated} from 'react-spring'

const Contents = (props) => {
    const items = props.items
    const addItem = (item) => {
      props.itemToCart(item) //TODO: Add more data
    }

    const InitiateItems = () => {  
      const props = useSpring({opacity: 1, from: {opacity: 0}})
      return (       
        items.map((item, index) => {  
          return (            
          <animated.div style={props} key={index}>
          <Card className="card">
          <Card.Img variant="top" src="/images/empty.jpg" alt="" />
          <Card.Body>
            <Card.Title>
              <Link to={`/items/${item._id}`}>{item.name}</Link>
            </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <h3 style={{color: "red"}}>{item.price}€</h3>
            <Button variant="primary" onClick={()=>{addItem(item)}}>
              <Basket/>
            </Button>
          </Card.Body>
          </Card>   
          </animated.div>
          )       
        })
      )     
    }

    return (      
        <Container>
        <Row lg='4'>
           <InitiateItems/>
        </Row>
      </Container>
    )
}
export default Contents