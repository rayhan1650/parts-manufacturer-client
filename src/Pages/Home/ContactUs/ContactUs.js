import React from "react";
import { MdLocationPin } from "react-icons/md";
import { GrMail } from "react-icons/gr";
import { BsFillTelephoneFill } from "react-icons/bs";

const ContactUs = () => {
  return (
    <div className="hero mt-6 bg-cyan-100">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left ">
          <h1 className="text-5xl text-primary font-bold">Fill The Form</h1>
          <p className="py-6 text-justify">
            A satisfied customer will stay with us. An unhappy customer will
            eventually find a better alternative to our business and leave.
            Customer feedback benefits are significant. So please tell us your
            opinion or ask us anything you want to know.
          </p>
          <p>
            <MdLocationPin className="inline text-warning" /> 242 Wythe Ave #4,
            Brooklyn, NY
          </p>
          <p className="my-3">
            <BsFillTelephoneFill className="inline text-warning" />{" "}
            1-090-1197-9528
          </p>
          <p>
            <GrMail className="inline text-warning" /> carparts@gmail.com
          </p>
        </div>
        <div className="card  w-full shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="Email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="number"
                placeholder="Phone"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <textarea
                rows="6"
                placeholder="Message"
                className="input input-bordered h-full"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
