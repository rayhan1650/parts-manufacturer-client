import React from "react";

const AddAReview = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  };
  return (
    <div className="flex justify-center items-center mt-8">
      <div>
        <h2 className="text-center text-primary text-2xl">
          Please Add A Review
        </h2>
        <div className="card lg:w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
              <textarea
                name="review"
                placeholder="Write About Our Services"
                id=""
                cols="30"
                rows="8"
                className="input input-bordered input-primary h-full w-full max-w-xs my-4"
              ></textarea>

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
