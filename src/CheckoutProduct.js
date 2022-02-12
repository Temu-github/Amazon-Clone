import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./Stateprovider";

function CheckoutProducts({ id, image, title, price, rating, hideButton,props}) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });

  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p className="rating_star"><img src="https://www.pngitem.com/pimgs/m/9-90359_stars-vector-png-cartoon-transparent-background-star-png.png" /></p>
            ))}

        </div>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        
        {!hideButton && (
        <button className="btn1"onClick={removeFromCart}>Remove from Cart</button>)}{' '}
      </div>
    </div>
  );
}

export default CheckoutProducts;
