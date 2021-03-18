import React, {useState, useEffect} from 'react'
import Navigationbar from '../components/Navigationbar'
import Contents from '../components/Contents'
import addBasket from '../util/addBasket'
import itemService from '../services/itemService'

const MainPage = () => {
    const [itemCount, setItemCount] = useState(0) //TODO: Functioning
    const [items, setItems] = useState([{name: "obj1", price: 200, available: 0, id: 1}])
    const itemToCart = (item) => {
        setItemCount(addBasket(item))
    }

    //Initiate items from DB
    useEffect(() => {   
        itemService.getAllItems().then(res => {
            console.log(res)
            setItems(res)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <>
            <Navigationbar/>
            <Contents itemToCart={itemToCart} items={items}/>
        </>     
    )
}
export default MainPage
