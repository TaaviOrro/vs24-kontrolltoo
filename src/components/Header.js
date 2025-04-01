import React, { useContext } from 'react'
import logo from '../assets/logo.jpg'
import Button from './UI/Button'
import CartContext from '../store/CartContext'


const Header = ({onOpenCart}) => {
    const cartCtx = useContext(CartContext);

    console.log('Cart Items:', cartCtx.items)

    const totalQuantity = cartCtx.items.reduce((total, item) => total + item.quantity, 0)

    return (
        <header id="main-header">
            <div id="title">
                <img src={logo}/>
                <h1>React Food Order App</h1>
            </div>
            <nav>
            <Button textOnly={true} onClick={onOpenCart}>
                Cart ({totalQuantity})

            </Button>
            </nav>
        </header>
    )
}

export default Header