import React from "react";
import ReactStars from "react-rating-stars-component";

const Review = ({ review }) => {
  const { name, description, rating } = review;
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-primary">{name}</h2>
        <p>{description}</p>
        <div className="flex justify-between items-center">
          <div>
            <ReactStars
              edit={false}
              value={rating}
              isHalf={true}
              size={20}
              activeColor="#E48111"
            />
          </div>
          <div className="text-warning font-bold">{rating}</div>
        </div>
      </div>
    </div>
  );
};

export default Review;
