import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'
import Navigationbar from './Navigationbar'
import loginService from '../services/loginService'
import {useState} from 'react'

//TODO: Add remember me
const Login = (props) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [show, setShow] = useState(false) //Notification
  const [userOne, setUser] = useState(null) //TODO: Add function

  const loginUser = async (event) => {
    event.preventDefault()
      try {
        console.log("logging in")
        const user = await loginService({
          email, password,
        })
        setUser(user)
        setEmail("")
        setPassword("")
        props.onLogin(user) 
      } catch (exception) {
        setShow(true)
      }
  }

  const Notification = () => {       
    if (show) {
      return (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Email or password wrong</Alert.Heading>
          <p>
            Please use another email or password
          </p>
        </Alert>
      );
    } else {
      return <> </>
    }
  }

   return(   
     <> 
    <Navigationbar/> 
      <Container className="loginRStyle">
        <Notification/>
        <h2>Login</h2>
        <Form className="loginStyle" onSubmit={loginUser}>
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
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        </Form>
      </Container>
     
    </>
   )
}
export default Login