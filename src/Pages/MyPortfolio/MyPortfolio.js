import React from "react";

const MyPortfolio = () => {
  return (
    <div className="">
      <div className="">
        <h2 className="text-5xl text-accent font-bold text-center mt-8">
          About Myself
        </h2>
        <div className="p-3 lg:px-5  text-center">
          <h2 className=" mt-2 text-2xl text-bold">NUR MD. RAYHAN</h2>
          <h3 className="text-xl">Email: nm.rayhan.1650@gmail.com</h3>
          <div className="bg-dark mb-1" style={{ height: "2px" }}></div>
          <h5>WEB DEVELOPER</h5>
        </div>

        <div className="p-3 lg:p-5 text-center ">
          <h3 className="text-xl text-accent font-bold">
            Educational Background
          </h3>
          <ul className=" mb-6">
            <li>
              BSc(Engg.): Mawlana Bhashani Science and Technology University,
              CGPA:3.26
            </li>
            <li className="text-primary">HSC: Science, GPA:5.00, 2013</li>
            <li>SSC: Science, GPA:5.00, 2011</li>
          </ul>

          <h3 className="text-xl text-primary mt-6">Live Project Links</h3>
          <ul>
            <li>
              Link 1:{" "}
              <a className="text-accent" href="https://bikehouse1650.web.app">
                Bike House
              </a>
            </li>
            <li>
              Link 2:{" "}
              <a className="text-accent" href="https://techtutor1650.web.app">
                Tech Tutor
              </a>
            </li>
            <li>
              Link 3:{" "}
              <a
                className="text-accent"
                href="https://galaxybuds1650.netlify.app"
              >
                Galaxy Buds
              </a>
            </li>
          </ul>

          <h3 className="text-xl text-primary mt-6">My Skills</h3>
          <ul>
            <li>1. HTML and CSS</li>
            <li>2. Bootstrap and Tailwind</li>
            <li>3. Javascript</li>
            <li>4. ReactJs</li>
            <li>5. NodeJs and ExpressJs</li>
            <li>6. MongoDB</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
