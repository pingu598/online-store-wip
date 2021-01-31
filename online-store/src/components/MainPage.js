import React, {useState} from 'react'
import Navigationbar from '../components/Navigationbar'
import Contents from '../components/Contents'

const MainPage = () => {
    const [itemCount, setItemCount] = useState(0) //TODO: Functioning
    const itemToCart = (item) => {
        const cart = JSON.parse(window.localStorage.getItem('cart'))
        const cartObj = {
            item: item
        }       
        const newCart = cart != null ? [...cart, cartObj] : [cartObj]
        window.localStorage.setItem('cart', JSON.stringify(newCart))
        console.log(window.localStorage.getItem('cart'))   
        const cartCount = Object.keys(newCart).length
        setItemCount(cartCount)
    }

    return (
        <>
            <Navigationbar/>
            <Contents itemToCart={itemToCart} items={["testObj1","testObj2","testObj3","testObj",
            "testObj","testObj","testObj","testObj",
            "testObj","testObj","testObj","testObj",
            "testObj","testObj","testObj","testObj",
            "testObj","testObj","testObj","testObj", "testObj",
            ]}/>
        </>
    )
}
export default MainPage
