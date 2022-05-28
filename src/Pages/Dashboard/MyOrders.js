import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const { isLoading, data } = useQuery(["myorders", user], () =>
    fetch(`http://localhost:5000/bookings?email=${user.email}`).then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="lg:px-6">
      <h2 className="text-center text-2xl mt-10 mb-5 text-accent">My orders</h2>

      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th></th>
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
                <td>{p.productName}</td>
                <td>{p.quantity}</td>
                <td>${p.totalPrice}</td>
                <td>
                  <button className="btn btn-xs">Pay</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
