import './App.css';
import React, {useState} from 'react'
import {
  BrowserRouter as Router,
  Switch, Route, Redirect
} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import './components/styles.css'
import Footer from './components/Footer'
import Login from './components/Login'
import Register from './components/Register'
import Basket from './components/Basket'
import AboutUs from './components/AboutUs'
import MainPage from './components/MainPage'

const App = () => {
  const [userOne, setUser] = useState(null) 
  
  const login = (user) => {
    window.localStorage.setItem('token', user.token)
    window.localStorage.setItem('firstName', user.firstName)
    setUser(user.token)
    console.log(userOne)
  }

  return (
    <>
    <Router>
      
      <Switch>
        <Route path="/login">
          {userOne || window.localStorage.getItem('token')
           ? <Redirect to="/"/>
           : <Login onLogin={login}/>}
        </Route>
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/basket" >      
          <Basket/>  
        </Route>
        <Route path="/about">      
          <AboutUs/>     
        </Route>     
        <Route path="/">          
           <MainPage/>
          <Footer />
        </Route>
      </Switch>
     
    </Router>
    </>
  )
}

export default App;
