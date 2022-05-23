import React from "react";

const Part = ({ part }) => {
  const {
    name,
    img,
    description,
    availableQuantity,
    minOrderQuantity,
    pricePerUnit,
  } = part;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10 bg-sky-100">
        <img src="tire.png" alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-primary">{name}</h2>
        <p>{description}</p>
        <h4 className="font-bold">Available Quantity: {availableQuantity}</h4>
        <h4 className="font-bold">
          Minimum Order Quantity: {minOrderQuantity}
        </h4>
        <h4 className="font-bold">Price Per-Unit: {pricePerUnit}</h4>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Part;
