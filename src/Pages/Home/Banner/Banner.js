import React from "react";

const Banner = () => {
  return (
    <div className="hero min-h-[60vh] bg-accent">
      <div className="hero-content flex-col lg:flex-row">
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
        <img src="https://i.ibb.co/s92CZhL/car-parts.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;
