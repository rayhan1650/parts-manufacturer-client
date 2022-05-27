import React from "react";

const Client = ({ client }) => {
  const { name, img } = client;
  return (
    <div className="flex justify-center  max-w-md">
      <div className="filter-color duration-200">
        <img className=" w-40 h-40" src={img} alt="Mercedes-logo" />

        <h2 className="uppercase text-center font-bold text-2xl">{name}</h2>
      </div>
    </div>
  );
};

export default Client;
