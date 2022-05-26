import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../../firebase.init";

const Purchase = () => {
  const [user] = useAuthState(auth);
  const [btn, setBtn] = useState(false);

  const { id } = useParams();
  const [parts, setParts] = useState({});
  const url = `http://localhost:5000/parts/${id}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setParts(data));
  }, []);

  const handleOrder = (event) => {
    event.preventDefault();

    const order = {
      orderId: user._id,
      name: user.displayName,
      email: user.email,
      phone: event.target.phone.value,
      totalCost: event.target.quantity.value * parts.pricePerUnit,
    };

    if (
      order.quantity < parts.minOrderQuantity ||
      order.quantity > parts.availableQuantity
    ) {
      setBtn(true);
    } else {
      setBtn(false);
    }
    console.log(order);
  };
  return (
    <div className="px-4 lg:px-14 py-6 ">
      <div className="hero   bg-sky-100 shadow-xl rounded">
        <div className="hero-content flex-col lg:flex-row">
          <img src={parts.img} alt={`Car ${parts.name}`} />
          <div className="lg:ml-6 mb-6">
            {/* <label htmlFor="purchase-modal" className="btn modal-button">
              open modal
            </label> */}
            <div className="card-actions justify-center my-10">
              <label
                htmlFor="purchase-modal"
                className="btn btn-sm btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary"
              >
                Place Order
              </label>
            </div>
            <h1 className="text-5xl font-bold text-primary">{parts.name}</h1>
            <p className="py-6 text-justify">{parts.description}</p>
            <h4 className="font-bold">
              Available Quantity: {parts.availableQuantity}
            </h4>
            <h4 className="font-bold">
              Minimum Order Quantity: {parts.minOrderQuantity}
            </h4>
            <h4 className="font-bold">Price Per-Unit: {parts.pricePerUnit}</h4>
          </div>
        </div>
      </div>

      {/* get info by modal  */}
      <div>
        <input type="checkbox" id="purchase-modal" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <label
              htmlFor="purchase-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            {/* <h3 className="font-bold text-lg text-secondary">Booking for: {name}</h3> */}
            <form
              onSubmit={handleOrder}
              className="grid grid-cols-1 gap-3 justify-items-center mt-2"
            >
              <input
                type="text"
                name="name"
                disabled
                value={user?.displayName || ""}
                className="input input-bordered w-full max-w-xs"
              />
              <input
                type="email"
                name="email"
                disabled
                value={user?.email || ""}
                className="input input-bordered w-full max-w-xs"
              />
              <input
                type="number"
                name="quantity"
                defaultValue={parts.minOrderQuantity}
                className="input input-bordered w-full max-w-xs"
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                className="input input-bordered w-full max-w-xs"
              />

              <textarea
                name="address"
                className="input input-bordered w-full max-w-xs"
                id=""
                placeholder="Your Address"
                cols="30"
                rows="10"
              ></textarea>

              <input
                disabled={btn}
                type="submit"
                value="Submit"
                className="btn btn-secondary w-full max-w-xs"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
