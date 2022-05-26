import React from "react";

const Review = ({ review }) => {
  const { name, description, rating } = review;
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-primary">{name}</h2>
        <p>{description}</p>
        <h4>Rating: {rating}</h4>
      </div>
    </div>
  );
};

export default Review;
