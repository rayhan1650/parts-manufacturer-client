import React, { useEffect, useState } from "react";

const ManageProducts = () => {
  const [parts, setParts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/parts")
      .then((res) => res.json())
      .then((data) => setParts(data));
  }, []);
  return (
    <div>
      <h2 className="text-center mt-6">Manage Products</h2>

      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th></th>
              <th>Parts Name</th>
              <th>Quantity</th>
              <th>min-Order</th>
              <th>price-Per-Unit</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {parts.map((p, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{p.name}</td>
                <td>{p.availableQuantity}</td>
                <td>{p.minOrderQuantity}</td>
                <td>${p.pricePerUnit}</td>
                <td>
                  <button className="btn btn-xs">Delete Product</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
