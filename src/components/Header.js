import React, { useContext } from 'react'
import logo from '../assets/logo.jpg'
import Button from './UI/Button'
import CartContext from '../store/CartContext'

const Header = () => {
    const cartCtx = useContext(CartContext);

    const totalQuantity = cartCtx.items.reduce((total, item) => total + item.quantity, 0)

    return (
        <header id="main-header">
            <div id="title">
                <img src={logo}/>
                <h1>React Food Order App</h1>
            </div>
            <nav>
            <Button textOnly={true} onClick={() => console.log('Cart button clicked')}>
                Cart ({totalQuantity})

            </Button>
            </nav>
        </header>
    )
}

export default Header