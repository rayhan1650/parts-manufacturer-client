import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading/Loading";

const ManageAllOrders = () => {
  const { isLoading, data } = useQuery("myorders", () =>
    fetch(
      "https://parts-manufacturer-server-production.up.railway.app/allbookings",
      {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    ).then((res) => {
      return res.json();
    })
  );

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h2 className="text-center mt-8">Manage All Orders</h2>

      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th></th>
              <th>Customer Name</th>
              <th>Parts Name</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {data.map((p, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{p.userName}</td>
                <td>{p.productName}</td>
                <td>{p.quantity}</td>
                <td>${p.totalPrice}</td>
                <td>Unpaid</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAllOrders;
