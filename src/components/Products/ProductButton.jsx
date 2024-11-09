import React from "react";
import { addToCart, removeFromCart } from "../../features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
function ProductButton(props) {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const handleAddClick = () => {
    dispatch(addToCart(props.product));
  };
  const handleRemoveClick = () => {
    dispatch(removeFromCart(props.product));
  };
  const isPresentInCart = Boolean(
    cartItems.find((item) => item.id === props.product.id)
  );
  if (isPresentInCart) {
    return (
      <button
        onClick={handleRemoveClick}
        className="btn btn-outline-danger d-block w-100"
      >
        Remove From Cart
      </button>
    );
  } else {
    return (
      <button
        onClick={handleAddClick}
        className="btn btn-outline-success d-block w-100"
      >
        Add To Cart
      </button>
    );
  }
}

export default ProductButton;
