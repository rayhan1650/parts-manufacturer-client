import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Purchase = () => {
  const { id } = useParams();
  const [parts, setParts] = useState({});
  const url = `http://localhost:5000/parts/${id}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setParts(data));
  }, []);
  return (
    <div>
      <h2>{parts.name}</h2>
    </div>
  );
};

export default Purchase;
