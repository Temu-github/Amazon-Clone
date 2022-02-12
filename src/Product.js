import React from "react";
// import Checkout from "./Checkout";
import "./Product.css";
import { useStateValue } from "./Stateprovider";
function Product({ id, title, image, price, rating }) {
const [{ basket }, dispatch] = useStateValue();

  //  console.log("this is the basket", basket);
  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
    // if (basket===0) {
    //   <Checkout cart_info="Your Amazon Cart is Empty" />
    // } else {
    //   <Checkout cart_info="Your Shopping Cart" />
    // }
  };

  return (
    
    <div className="product">
      <img src={image} alt="" />
      <div className="product__info">
        <p>{title}</p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p className="rating_star"><img src="https://www.pngitem.com/pimgs/m/9-90359_stars-vector-png-cartoon-transparent-background-star-png.png"/></p>
            ))}
        </div>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
    
      <button className="btn" onClick={addToBasket}>Add to Cart</button>
    
    </div>
    
  );
}

export default Product;
