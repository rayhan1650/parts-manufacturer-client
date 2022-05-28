import React, { useEffect, useState } from "react";
import Part from "../Part/Part";

const Parts = () => {
  const [parts, setParts] = useState([]);
  useEffect(() => {
    fetch("https://serene-beyond-82900.herokuapp.com/parts")
      .then((res) => res.json())
      .then((data) => setParts(data));
  }, []);

  return (
    <div className="my-12">
      <h2 className="font-bold text-center text-accent text-5xl ">
        Latest Parts
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-2 py-6 lg:px-14">
        {parts.slice(0, 6).map((part) => (
          <Part key={part._id} part={part} />
        ))}
      </div>
    </div>
  );
};

export default Parts;
