import Container from 'react-bootstrap/Container'
import Navigationbar from './Navigationbar'
import {useSpring, animated} from 'react-spring'

const AboutUs = () => {
    //TODO
    const Animation = () => {
        const props = useSpring({opacity: 1, from: {opacity: 0}})
        return <animated.div style={props}>TODO</animated.div>
    }
    
    return (   
    <> 
        <Navigationbar/>  
        <Container>
            <Animation/>
        </Container> 
    </>
   )
}
export default AboutUs