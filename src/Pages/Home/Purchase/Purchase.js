import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Purchase = () => {
  const { id } = useParams();
  const [parts, setParts] = useState({});
  const url = `http://localhost:5000/parts/${id}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setParts(data));
  }, []);
  return (
    <div className="px-4 lg:px-14 py-6 ">
      <div className="hero min-h-screen  bg-sky-100 shadow-xl rounded">
        <div className="hero-content flex-col lg:flex-row">
          <img src={parts.img} alt="" />
          <div>
            <h1 className="text-5xl font-bold text-primary">{parts.name}</h1>
            <p className="py-6 text-justify">{parts.description}</p>
            <h4 className="font-bold">
              Available Quantity: {parts.availableQuantity}
            </h4>
            <h4 className="font-bold">
              Minimum Order Quantity: {parts.minOrderQuantity}
            </h4>
            <h4 className="font-bold">Price Per-Unit: {parts.pricePerUnit}</h4>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
