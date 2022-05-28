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
    <div>
      <h2>My orders:{data.length}</h2>
    </div>
  );
};

export default MyOrders;
