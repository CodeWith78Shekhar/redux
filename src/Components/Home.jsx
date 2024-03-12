import React from 'react'
import '../App.css'
const Home = (props) => {
    console.log("Home",props.cardData.cardItems.cardData.length)
  return (
    <div>
    {/* <div className="add-to-cart">
<span className="cart-count" >{props.cardData.cardItems.cardData.length}</span>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" alt='img'/>
    </div> */}

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
            <button onClick={()=>
            props.addToCartHandler({price:1000 ,name: 'iphone 11'})
            }> Add To Cart</button>
            <button onClick={()=>
            props.removeToCartHandler()
            }> Remove To Cart</button>
        </div>
    </div>
</div>
)
}

export default Home
