import React, {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Navigationbar from '../components/Navigationbar'
import addBasket from '../util/addBasket'
import itemService from '../services/itemService'
import {useParams} from "react-router-dom"  

const ContentPage = (props) => {
    const [itemCount, setItemCount] = useState(0) //TODO: Functioning
    const [item, setItem] = useState({name: "obj1", price: 200, available: 0, id: useParams().id})
    //TODO: TEMP
    const addItem = (item) => {
        setItemCount(addBasket(item))
      }
    useEffect(() => {   
        console.log(item)
        itemService.itemById(item.id).then(res => {
          console.log(res)
          setItem(res)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    const Item = () => {   
        console.log("id of item:", useParams().id)
        return (
            <Row className="cardCenter" lg="2">
            <Card style={{ width: '30rem' }}>
            <Card.Body>
                <Card.Img variant="top" src="/images/empty.jpg" alt="" />
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Cras justo odio</ListGroupItem>
              <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
              <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup>         
          </Card>
          <Card style={{ width: '30rem' }}>
          <Card.Body style={{ position: 'relative'}}>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Card.Title className="pricePos">{item.price}€</Card.Title>
            <Button className="basketPos" variant="primary" onClick={()=>{addItem(item)}}>
              Add to basket
            </Button>
          </Card.Body>         
        </Card>
        </Row>
        )     
    }

    return (    
        <>
            <Navigationbar/>  
            <Container>                            
                <Item/>
            </Container>
        </>
    )
}
export default ContentPage