import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import axios from "axios";

const AddAReview = () => {
  const [user] = useAuthState(auth);
  const [giveRating, setGiveRating] = useState(0);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const ratingChanged = (num) => {
    setGiveRating(num);
  };
  const onSubmit = (data) => {
    const name = user.displayName;
    const description = data.comment;
    const rating = giveRating;
    axios
      .post("http://localhost:5000/reviews", {
        name,
        description,
        rating,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex justify-center items-center mt-8">
      <div>
        <h2 className="text-center text-primary text-2xl">
          Please Add A Review
        </h2>
        <div className="card lg:w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex justify-between items-center">
              <div>
                <ReactStars
                  onChange={ratingChanged}
                  isHalf={true}
                  size={36}
                  activeColor="#E48111"
                />
              </div>
              <div className="text-warning text-2xl font-bold">
                {giveRating}
              </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <textarea
                {...register("comment", { required: true })}
                placeholder="Write About Our Services"
                id=""
                cols="30"
                rows="8"
                className="input input-bordered input-primary h-full w-full max-w-xs my-4"
              />
              <p className="text-red-500">
                {errors.comment && "Your comment is required"}
              </p>

              <input
                className="btn btn-primary "
                type="submit"
                value="Post Review"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAReview;
