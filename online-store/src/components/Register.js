import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Navigationbar from './Navigationbar'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'
import registerService from '../services/registerService'
import {useState} from 'react'

const Register = () => {
    const [firstName, setFirstname] = useState("")
    const [lastName, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [show, setShow] = useState(false) //Notification
    const [user, setUser] = useState(null)  //TODO: Use data of user
    
    const addUser = async (event) => {
      event.preventDefault()
      try {
        console.log('form sent', event.target)
        const user = await registerService.register({firstName, lastName, email, password})
        //Clear all fields after success
        setFirstname("")
        setLastname("")
        setEmail("")
        setPassword("")
        setUser(user)
        console.log(user)
      } catch (exception) {
        //TODO: Implement props to notification
        setShow(true)
      }
    }
    
    const Notification = () => {       
      if (show) {
        return (
          <Alert variant="danger" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>Email already in use</Alert.Heading>
            <p>
              Please use another email
            </p>
          </Alert>
        );
      } else {
        return <> </>
      }
    }

    return (   
     <> 
    <Navigationbar/>  
      <Container className="loginRStyle">
        <Notification />
        <h2>Create a user</h2>
        <Form onSubmit={addUser}>
          <Form.Group controlId="formBasicPassword">
              <Form.Row>
                  <Col>
                  <Form.Label>First name</Form.Label>
                  <Form.Control placeholder="First name" 
                    onChange={({ target }) => setFirstname(target.value)}
                  />
                  </Col>
                  <Col>
                  <Form.Label>Last name</Form.Label>
                  <Form.Control placeholder="Last name" 
                    onChange={({ target }) => setLastname(target.value)}
                  />
                  </Col>
              </Form.Row>        
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" 
              onChange={({ target }) => setEmail(target.value)}
            />
          </Form.Group>
        
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" 
              onChange={({ target }) => setPassword(target.value)}
            />
            
          </Form.Group>
          
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
   )
}
export default Register