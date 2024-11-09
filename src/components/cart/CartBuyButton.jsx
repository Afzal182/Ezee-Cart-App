import React from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
function CartBuyButton() {
  const nav = useNavigate();
  const buy = async () => {
    const result = await Swal.fire({
      title: "Do You Want To Palce The Order ?",
      showDenyButton: true,
      confirmButtonText: "Place Order",
      denyButtonText: "Don't Place Order",
    });
    if (result.isConfirmed) {
      await Swal.fire({
        title: "Done",
        text: "Order Placed SuccessFully!",
        icon: "success",
      });
      nav("/");
      window.location.reload();
    } else if (result.isDenied) {
      await Swal.fire({
        title: "Order Not Placed!",
        text: "",
        icon: "info",
      });
    }
  };
  return (
    <button
      onClick={buy}
      className="btn btn-success d-block w-100 fw-bold mt-3"
    >
      Buy Now
    </button>
  );
}

export default CartBuyButton;
