import Home from '../Components/Home'

import {connect} from 'react-redux'
import { addToCart ,removeToCart} from '../Services/Actions/Actions';
import React from 'react';

const mapStateToProps = (state)=>({
     cardData:state
})

const mapDispatchToProps = dispatch=>({
    addToCartHandler: data=>dispatch(addToCart(data)),
    removeToCartHandler: data=>dispatch(removeToCart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)







// export default Home;