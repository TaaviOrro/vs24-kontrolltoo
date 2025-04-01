import React from 'react'
import '../index.css'

const MealItem = ({ name, description, price, image}) => {
    console.log("image prop:", image)
    const imagePath = require(`../assets/${image}`);

    const formattedPrice = new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR',
    }).format(price);

    return (
        <li className='meal-item'>
            <article>
                <img className='meal-item-img' src={imagePath} alt={name}/>
                <div>
                    <h3>{name}</h3>
                    <p className="meal-item-description">{description}</p>
                    <p className="meal-item-price">{formattedPrice}</p>
                </div>
                <p>
                    <button >Add to Cart</button>
                </p>
            </article>
        </li>
        
    )
}

export default MealItem