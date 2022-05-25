import React from "react";
import { RiCustomerService2Line } from "react-icons/ri";
import { MdAttachMoney, MdReviews } from "react-icons/md";
import { SiProtools } from "react-icons/si";

const BusinessSummary = () => {
  return (
    <div className="my-6  px-2 lg:px-14">
      <h2 className="font-bold text-2xl lg:text-4xl text-center  text-secondary uppercase">
        Our Commitment to Quality and Trust
      </h2>
      <h4 className="text-primary text-center lg:text-lg uppercase font-bold px-8 lg:px-0">
        <q>Trust is the foundation of every successful sale</q>
      </h4>
      <hr className="mb-5" />
      <div className="shadow flex flex-col lg:flex-row ">
        <div className="stat flex flex-col text-center">
          <div className="stat-figure text-secondary text-4xl ">
            <RiCustomerService2Line />
          </div>

          <div className="stat-value text-primary">150+</div>
          <div className=" text-secondary">We Served</div>
        </div>

        <div className="stat  flex flex-col text-center">
          <div className="stat-figure text-secondary">
            <div className="stat-figure text-secondary text-4xl ">
              <MdAttachMoney />
            </div>
          </div>
          <div className="stat-value text-primary">90M+</div>
          <div className=" text-secondary">Annual Revenue</div>
        </div>

        <div className="stat  flex flex-col text-center">
          <div className="stat-figure text-secondary text-4xl">
            <MdReviews />
          </div>
          <div className="stat-value text-primary">43K+</div>
          <div className=" text-secondary">Reviews</div>
        </div>
        <div className="stat  flex flex-col text-center">
          <div className="stat-figure text-secondary text-4xl">
            <SiProtools />
          </div>
          <div className="stat-value text-primary">76+</div>
          <div className=" text-secondary">Parts</div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
