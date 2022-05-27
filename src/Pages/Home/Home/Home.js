import React from "react";
import Banner from "../Banner/Banner";
import BusinessSummary from "../BusinessSummary/BusinessSummary";
import Clients from "../Clients/Clients";
import ContactUs from "../ContactUs/ContactUs";
import Parts from "../Parts/Parts";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Banner />
      <Parts />
      <BusinessSummary />
      <Reviews />
      <Clients />
      <ContactUs />
    </div>
  );
};

export default Home;
