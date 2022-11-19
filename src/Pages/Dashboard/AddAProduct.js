import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddAProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const imageStorageKey = "dd8ddf008e6d309ab419bfa0f369c1df";

  const onSubmit = async (data) => {
    const image = data.image[0];
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    const formData = new FormData();
    formData.append("image", image);
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const product = {
            name: data.name,
            img: img,
            description: data.description,
            availableQuantity: data.availableQuantity,
            minOrderQuantity: data.minOrderQuantity,
            pricePerUnit: data.pricePerUnit,
          };

          console.log(product);

          //send to your db
          axios
            .post(
              "https://parts-manufacturer-server-production.up.railway.app/parts",
              product
            )
            .then((inserted) => {
              console.log("product", inserted);
            })
            .catch((error) => {
              console.log(error);
            });
        }
        console.log("imageBB", result);
      });
  };
  return (
    <div className="flex justify-center">
      <div>
        <h2>Add a Product</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="product Name"
              className="input input-bordered w-full max-w-xs"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is required",
                },
              })}
            />
            <label className="label">
              {errors.name?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.name.message}
                </span>
              )}
            </label>
          </div>

          {/* description  */}

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input
              type="text"
              placeholder="description"
              className="input input-bordered w-full max-w-xs"
              {...register("description", {
                required: {
                  value: true,
                  message: "description is required",
                },
              })}
            />
            <label className="label">
              {errors.description?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.description.message}
                </span>
              )}
            </label>
          </div>

          {/* availablequantity  */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <input
              type="number"
              placeholder="availableQuantity"
              className="input input-bordered w-full max-w-xs"
              {...register("availableQuantity", {
                required: {
                  value: true,
                  message: "availableQuantity is required",
                },
              })}
            />
            <label className="label">
              {errors.availableQuantity?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.availableQuantity.message}
                </span>
              )}
            </label>
          </div>

          {/* min order quantity  */}

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">MinOrderQuantity</span>
            </label>
            <input
              type="number"
              placeholder="minOrderQuantity"
              className="input input-bordered w-full max-w-xs"
              {...register("minOrderQuantity", {
                required: {
                  value: true,
                  message: "minOrderQuantity is required",
                },
              })}
            />
            <label className="label">
              {errors.minOrderQuantity?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.minOrderQuantity.message}
                </span>
              )}
            </label>
          </div>

          {/* price per unit  */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">pricePerUnit</span>
            </label>
            <input
              type="number"
              placeholder="pricePerUnit"
              className="input input-bordered w-full max-w-xs"
              {...register("pricePerUnit", {
                required: {
                  value: true,
                  message: "pricePerUnit is required",
                },
              })}
            />
            <label className="label">
              {errors.pricePerUnit?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.pricePerUnit.message}
                </span>
              )}
            </label>
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="file"
              className="input input-bordered w-full max-w-xs"
              {...register("image", {
                required: {
                  value: true,
                  message: "Image is required",
                },
              })}
            />
            <label className="label">
              {errors.name?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.name.message}
                </span>
              )}
            </label>
          </div>

          <input className="btn w-full max-w-xs" type="submit" value="Add" />
        </form>
      </div>
    </div>
  );
};

export default AddAProduct;
