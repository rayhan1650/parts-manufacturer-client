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
          <h3 className="text-xl text-accent">Educational Background</h3>
          <ul className=" mb-6">
            <li>
              BSc(Engg.): Mawlana Bhashani Science and Technology University,
              CGPA:3.26
            </li>
            <li className="text-primary">HSC: Science, GPA:5.00, 2013</li>
            <li>SSC: Science, GPA:5.00, 2011</li>
          </ul>

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
          <div>
            <h1 className="display-4 fw-bold">HELLO!</h1>
            <h4>Here's who I am and what I do.</h4>
          </div>
          <hr />

          <div>
            <h3>About Me</h3>
            <p className="text-justify">
              I am Nur Md. Rayhan. I have studied Computer Science and
              Engineering from MBSTU. While I was studying in the university I
              firstly introduced to programming. After completed my B.Sc, for
              improving my web development skill, I was admitted to Programming
              Hero web development course.
            </p>
            <p className="my-text-justify">
              I'm highly energetic and motivated person and I love to work as a
              member or a leader of a team. Currently my only goal is to become
              a web developer and I am working hard to fulfill my goal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
