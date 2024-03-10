import React from 'react'
import '../App.css'
const Home = () => {
  return (
    <div>
    <div className="add-to-cart">
<span className="cart-count"></span>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" alt='img'/>
    </div>

    <h1 style={{marginLeft:'25%'}}>Home Component</h1>
    <div className="cart-wrapper">
        <div className="img-wrapper item">
            <img src="https://w7.pngwing.com/pngs/630/527/png-transparent-iphone-x-iphone-8-plus-iphone-4-apple-iphone-gadget-electronics-mobile-phone-case-thumbnail.png"  alt='img' />
        </div>
        <div className="text-wrapper item">
            <span>
                I-Phone
            </span>
            <span>
                Price: $1000.00
            </span>
        </div>
        <div className="btn-wrapper item">
            <button> Add To Cart</button>
        </div>
    </div>
</div>
)
}

export default Home
