import React from "react";

const Banner = () => {
  return (
    <div className="hero min-h-[60vh] bg-accent">
      <div className="hero-content flex-col lg:flex-row">
        <div>
          <h1 className="text-3xl lg:text-5xl font-bold text-primary">
            Latest &amp; Powerful
            <br />
            Products For You
          </h1>
          <p className="py-6 text-justify text-neutral">
            We have been a car parts supplier since 1950. From the start we are
            a specialist. First in parts and now also in shock absorbers for all
            brands and in parts for all electric vehicles. We always look for
            opportunities to fulfil your needs. By being a specialist we can
            promise you full ranges, high availability, premium quality and
            competitive prices.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
        <img src="https://i.ibb.co/s92CZhL/car-parts.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;
