import React, { useEffect, useState } from "react";
import Part from "../Part/Part";

const Parts = () => {
  const [parts, setParts] = useState([]);
  useEffect(() => {
    fetch("parts.json")
      .then((res) => res.json())
      .then((data) => setParts(data));
  }, []);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-2 py-6 lg:px-14">
      {parts.map((part) => (
        <Part key={part._id} part={part} />
      ))}
    </div>
  );
};

export default Parts;
