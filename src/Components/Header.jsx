import React from 'react'
import '../App.css'
const Header = (props) => {
    console.log("Home",props.cardData.cardItems.cardData.length)
  return (
    <div>
    <div className="add-to-cart">
<span className="cart-count" >{props.cardData.cardItems.cardData.length}</span>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" alt='img'/>
    </div>

</div>
)
}

export default Header
