import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../../firebase.init";
import { toast } from "react-toastify";
import axios from "axios";

const ModalPurchase = ({ parts, setOpenModal }) => {
  const { minOrderQuantity, availableQuantity, pricePerUnit, name, _id } =
    parts;

  const [user] = useAuthState(auth);
  const [isDisabled, setIsDisabled] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  //   const handleQuantity = (q) => {
  //     console.log(q);
  //   };

  const handleBtn = (e) => {
    setIsDisabled(e);
  };

  const onSubmit = (data) => {
    const email = user?.email;
    const userName = user?.displayName;
    const productId = _id;
    const productName = name;
    const phone = data.phone;
    const address = data.address;
    const quantity = data.quantity || minOrderQuantity;
    const totalPrice = parseInt(quantity) * parseInt(pricePerUnit);
    const purchase = {
      userName,
      email,
      productId,
      productName,
      quantity,
      totalPrice,
      phone,
      address,
    };

    axios
      .post("http://localhost:5000/bookings", purchase)
      .then((res) => {
        toast("Purchase info send to database.");
        setOpenModal(false);
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
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
          <h3 className="font-bold text-lg text-secondary">
            Place order for: {name}
          </h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 gap-3 justify-items-center mt-2"
          >
            {/* name field  */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                disabled
                defaultValue={user?.displayName || ""}
                className="input input-bordered input-primary w-full max-w-xs"
                {...register("name")}
              />
            </div>

            {/* email field  */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                disabled
                defaultValue={user?.email || ""}
                className="input input-bordered input-primary w-full max-w-xs"
                {...register("email")}
              />
            </div>

            {/* Quantity field  */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <input
                // onChange={(e) => handleQuantity(e.value)}
                type="number"
                className="input input-bordered input-primary w-full max-w-xs"
                {...register("quantity", {
                  min: minOrderQuantity,
                  max: availableQuantity,
                  required: true,
                  //   onChange: (e) => {
                  //     console.log(e.value);
                  //     handleQuantity(e);
                  //   },
                })}
                defaultValue={minOrderQuantity}
              />

              {/* {errors.quantity ? setIsDisabled(true) : setIsDisabled(false)} */}
              <p className="text-red-500">
                {errors.quantity &&
                  `Input quantity between ${minOrderQuantity} & ${availableQuantity}`}
              </p>
            </div>

            {/* phone no field  */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                type="number"
                className="input input-bordered input-primary w-full max-w-xs"
                {...register("phone", { required: true })}
              />
              <p className="text-red-500">
                {errors.phone?.type === "required" && "Phone no is required"}
              </p>
            </div>

            {/* address field  */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">address</span>
              </label>
              <input
                type="text"
                className="input input-bordered input-primary w-full max-w-xs"
                {...register("address", { required: true })}
              />
              <p className="text-red-500">
                {errors.address?.type === "required" && "Address is required"}
              </p>
            </div>

            <input
              htmlFor="purchase-modal"
              disabled={isDisabled}
              type="submit"
              value="Submit"
              className="btn btn-secondary w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalPurchase;
