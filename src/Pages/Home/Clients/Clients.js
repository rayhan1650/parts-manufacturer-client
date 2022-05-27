import React from "react";
import "./Clients.css";
import Mercedes from "../../../assets/logo/mercedes-benz.svg";
import Toyota from "../../../assets/logo/toyota.svg";
import Mazda from "../../../assets/logo/mazda.svg";
import Client from "./Client";

const Clients = () => {
  const topClients = [
    {
      name: "Mercedes-benz",
      img: Mercedes,
    },
    {
      name: "Toyota",
      img: Toyota,
    },
    {
      name: "Madza",
      img: Mazda,
    },
  ];
  return (
    <div className="my-10 lg:px-14">
      <h2 className="uppercase text-4xl font-bold text-accent text-center mb-8">
        Our Top Clients
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-2">
        {topClients.map((client, index) => (
          <Client key={index} client={client} />
        ))}
      </div>
    </div>
  );
};

export default Clients;
