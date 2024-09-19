/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import { deleteItem } from "../../../store/shopping-cart/cartSlice";

/* eslint-disable no-unused-vars */
function TrTable({ food }) {
  const dispatch = useDispatch();
  const { id, image01, title, price, quantity } = food;

  function handleDeleteFood() {
    dispatch(deleteItem(id));
  }
  return (
    <tr>
      <td className="user-cart-image-box">
        <img
          src={food.image01}
          alt="food image"
          className="user-cart-food-image"
        />
      </td>
      <td>{food.title}</td>
      <td>{food.quantity}x</td>
      <td>{food.price}</td>
      <td>{food.totalPrice} EGP</td>
      <td>
        <i className="ri-delete-bin-6-line" onClick={handleDeleteFood}></i>
      </td>
    </tr>
  );
}

export default TrTable;
