import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ModalPurchase from "./ModalPurchase";

const Purchase = () => {
  const { id } = useParams();
  const [openModal, setOpenModal] = useState(false);
  const [parts, setParts] = useState({});
  const url = `https://parts-manufacturer-server-production.up.railway.app/parts/${id}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setParts(data));
  }, [url]);

  const {
    minOrderQuantity,
    availableQuantity,
    pricePerUnit,
    name,
    description,
    img,
  } = parts;

  return (
    <div className="px-4 lg:px-14 py-6 ">
      <div className="hero   bg-sky-100 shadow-xl rounded">
        <div className="hero-content flex-col lg:flex-row">
          <img src={img} alt={`Car ${name}`} />
          <div className="lg:ml-6 mb-6">
            {/* open modal btn  */}
            <div className="card-actions justify-center my-10">
              <label
                htmlFor="purchase-modal"
                onClick={() => setOpenModal(true)}
                className="btn btn-sm btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary"
              >
                Place Order
              </label>
            </div>

            {/* Parts info  */}
            <h1 className="text-5xl font-bold text-primary">{name}</h1>
            <p className="py-6 text-justify">{description}</p>
            <h4 className="font-bold">
              Available Quantity: {availableQuantity}
            </h4>
            <h4 className="font-bold">
              Minimum Order Quantity: {minOrderQuantity}
            </h4>
            <h4 className="font-bold">Price Per-Unit: {pricePerUnit}</h4>
          </div>
        </div>
      </div>

      {/* get info by modal  */}
      {openModal && <ModalPurchase parts={parts} setOpenModal={setOpenModal} />}
    </div>
  );
};

export default Purchase;
