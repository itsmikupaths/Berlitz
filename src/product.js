import React, { useState } from 'react';
import img from './assets/ath-msr7-black.jpg';

const Product = () => {
  // const [variant, setVariant] = useState();

  return (
    <>
      <div className="product-name-container">
        <h1>Audio-Technica ATM-MSR7</h1>
        <span>2017 Nest Headphone of the Year Award Winner</span>
      </div>
      <div className="product-image-container">
        <img src={img} alt="title" />
      </div>
      <div className="product-tab-container">
        <div className="active">Description</div>
        <div>Details</div>
      </div>
      <div className="tab-contents">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam feugiat eleifend urna eget lobortis. Sed non dignissim diam. Ut nibh augue, suscipit et posuere in, feugiat vel nisl. Aliquam erat volutpat. Fusce tincidunt, enim ut vulputate lacinia, enim sapien laoreet est, eu ultricies sapien neque quis sapien. Vivamus sed feugiat augue. Curabitur congue urna ex, et vulputate neque cursus eleifend. Aliquam facilisis eu quam et pharetra. Mauris vitae leo ac risus suscipit hendrerit.
      </div>
      <div className="product-price-container">
        <span className="price-now">$59.99</span>
        <span className="price-then">$89.99</span>
      </div>
      <div className="product-variant-container">
        <select style={{ width: '50%' }}>
          <option value="black">Black</option>
          <option value="brown">Brown</option>
        </select>
      </div>
    </>
  );
}

export default Product;
