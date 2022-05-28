import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="text-center mt-6 text-lg">
      <h2 className="font-bold mb-4 text-primary">My profile</h2>
      <h2>Name: {user.displayName}</h2>
      <h2>Email: {user.email}</h2>
    </div>
  );
};

export default MyProfile;
