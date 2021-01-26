import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Contents = ({items}) => {
    const addItem = ({props}) => {
      window.localStorage.setItem('product', "dog") //TODO Fix
    }
    
    const InitiateItems = () => {       
        return (
        items.map((item, index) => {   
            return (    
            <Card key={index} className="card">
            <Card.Img variant="top" src="/images/empty.jpg" alt="" />
            <Card.Body>
              <Card.Title>{item}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary" onClick={addItem}>Add to cart</Button>
            </Card.Body>
            </Card>   
            )       
        })
        )
    }
    //TODO: Add rows (row 39)
    //TODO: Add keys/index (row 17)
    return (      
        <Container>
        <Row lg='4'>
           <InitiateItems/>
        </Row>
      </Container>
    )
}
export default Contents