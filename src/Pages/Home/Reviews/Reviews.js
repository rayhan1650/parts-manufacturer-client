import React, { useEffect, useState } from "react";
import Review from "../Review/Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="px-2 py-6 lg:px-14">
      <h2 className="text-center font-bold text-4xl text-secondary mb-6">
        Reviews
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
        {reviews.map((review) => (
          <Review key={review._id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
