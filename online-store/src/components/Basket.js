import Container from 'react-bootstrap/Container'
import Navigationbar from './Navigationbar'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {Trash} from 'react-bootstrap-icons'
import Badge from 'react-bootstrap/Badge'

const Basket = () => {
   return(   
     <> 
    <Navigationbar/>  
    <Container className="basketMargin">
        <h2>Basket</h2>        
        <Card className="basketItem">
        <Row>
            <Col>
                <Card.Img src="/images/dog.png" className="basketImage"></Card.Img>
            </Col>
            <Col xs={6} className="basketText">
                <p>Dog</p>
                <Badge pill variant="success">
                    Available
                </Badge>{' '}
                
            </Col>
            <Col className="basketButtons">
                <p className="price1">100€</p>
                <Button variant="success"> 
                    <Trash></Trash>                    
                </Button>{' '}
            </Col>
        </Row>
        </Card> 

        <h3 className="price2">Total: </h3>  
        <Button className="floatRight">Next</Button> 
    </Container>     
    </>
   )
}
export default Basket