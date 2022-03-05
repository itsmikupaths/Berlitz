import React, { useState } from 'react';
import './App.scss';
import Product from './product.js'
import AddToCart from './AddToCart.js'

// font-awesome icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'

const App = () => {
  const [cart, setCart] = useState([]);
  const [orderDetails, setOrderDetails] = useState({});

  // json data of product (in real scenario, this data should be fetch from database or API)
  const productData = {
    product_id: "1",
    product_name:"Audio-Technica ATM-MSR7",
    product_highlight:"2017 Nest Headphone of the Year Award Winner",
    product_description:"Description lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dignissim diam. Ut nibh augue, suscipit et posuere in, feugiat vel nisl. Aliquam erat volutpat. Fusce tincidunt, enim ut vulputate lacinia, enim sapien laoreet est, eu ultricies sapien neque quis sapien. Vivamus sed feugiat augue. Curabitur congue urna ex, et vulputate neque cursus eleifend. Aliquam facilisis eu quam et pharetra. Mauris vitae leo ac risus suscipit hendrerit.",
    product_details:"Details etiam feugiat eleifend urna eget lobortis. Sed non dignissim diam. Ut nibh augue, suscipit et posuere in, feugiat vel nisl. Aliquam erat volutpat. Fusce tincidunt, enim ut vulputate lacinia, enim sapien laoreet est, eu ultricies sapien neque quis sapien. Vivamus sed feugiat augue. Curabitur congue urna ex, et vulputate neque cursus eleifend. Aliquam facilisis eu quam et pharetra.",
    product_price: {
      price_now:"$59.99",
      price_then:"$89.99"
    },
    product_variant: [
      {
        color:"Black",
        image_source:"./assets/ath-msr7-black.jpg"
      },
      {
        color:"Brown",
        image_source:"./assets/ath-msr7-brown.jpg"
      }
    ]
  }

  const selectedVariant = (product) => {
    setOrderDetails(product);
  }

  const addToCart = () => {
    let order = [...cart, orderDetails]
    setCart(order);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="back-button">
          <FontAwesomeIcon icon={ faArrowLeftLong } />
          All products
        </div>
      </header>
      <div className="content-wrapper">
        <Product data={ productData } selectedVariant={ selectedVariant } />
        <div className="add-to-cart">
          <AddToCart addToCart={ addToCart } />
        </div>
      </div>
    </div>
  );
}

export default App;
