import React, { useEffect, useState } from 'react';

const Product = (props) => {
  const { product_id, product_name, product_highlight, product_description, product_details,
          product_price: { price_now, price_then }, product_variant } = props.data;

  // state
  const [selVariant, setSelVariant] = useState(product_variant[0]);
  
  const changeVariant = (val) => {
   let selected = product_variant.filter((v => v.color === val));
   setSelVariant(selected[0]);
   props.selectedVariant(selected[0]);
  }

  useEffect(() => {
    props.selectedVariant(selVariant);
  });

  return (
    <>
      <div className="product-name-container">
        <h1>{ product_name }</h1>
        <span>{ product_highlight }</span>
      </div>
      <div className="product-image-container">
        <img src={ selVariant.image_source } alt="title" />
      </div>
      <div className="product-tab-container">
        <div className="active">Description</div>
        <div>Details</div>
      </div>
      <div className="tab-contents">
        { product_description }
      </div>
      <div className="product-price-container">
        <span className="price-now">{ price_now }</span>
        <span className="price-then">{ price_then }</span>
      </div>
      <div className="product-variant-container">
        <select style={{ width: '50%' }} onChange={ (e) => changeVariant(e.target.value) } >
          {
            product_variant.map((v, i) => {
              return <option key={ i } value={ v.color }>{ v.color }</option>
            })
          }
        </select>
      </div>
    </>
  );
}

export default Product;
