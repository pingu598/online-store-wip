import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Footer = () => {
    
    //TODO: Make li items without dot and styling
    //TODO Alt photo
    return (
       <footer>        
        <Jumbotron className="footerStyle">
            <Container>
                <Row>
                    <Col>
                        <ul>
                            <p>Contact info:</p>
                            <li>+35800000</li>
                        </ul>
                    </Col>
                    <Col>
                        <ul>
                            <p>Contact info 2:</p>
                            <li>+35800000</li>
                        </ul>
                    </Col>
                    <Col>
                        <a href="https://github.com/pingu598">
                            <img src="/images/gitlogo.png" height="57" alt=""></img> 
                        </a>                 
                        <p>Created by: Samuel Jumppanen</p>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>           
       </footer>
    )
}
export default Footer