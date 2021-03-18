const itemToCart = (item) => {
    const cart = JSON.parse(window.localStorage.getItem('cart'))
    const cartObj = {
        item: item
    }       
    const newCart = cart != null ? [...cart, cartObj] : [cartObj]
    window.localStorage.setItem('cart', JSON.stringify(newCart))
    console.log(window.localStorage.getItem('cart'))   
    const cartCount = Object.keys(newCart).length    
    return cartCount
}

export default itemToCart