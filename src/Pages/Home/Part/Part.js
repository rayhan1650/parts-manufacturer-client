import React from "react";
import { useNavigate } from "react-router-dom";

const Part = ({ part }) => {
  const {
    _id,
    name,
    img,
    description,
    availableQuantity,
    minOrderQuantity,
    pricePerUnit,
  } = part;

  const navigate = useNavigate();

  const handlePurchase = (id) => {
    navigate(`/purchase/${id}`);
  };
  return (
    <div className="card bg-base-50 shadow-xl">
      <figure className="px-10 pt-10 bg-sky-100">
        <img src={img} alt={`Car ${name}`} className="rounded-xl max-h-72" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-primary">{name}</h2>
        <p className="text-justify">
          {description.length > 180
            ? `${description.slice(0, 180)} ....`
            : description}
        </p>
        <h4 className="font-bold">Available Quantity: {availableQuantity}</h4>
        <h4 className="font-bold">
          Minimum Order Quantity: {minOrderQuantity}
        </h4>
        <h4 className="font-bold">Price Per-Unit: {pricePerUnit}</h4>
        <div className="card-actions">
          <button
            onClick={() => handlePurchase(_id)}
            className="btn btn-primary"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Part;
