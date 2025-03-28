import React, { useEffect, useState } from "react";
import axios from "axios";

const FetchData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/data/") // Adjust API endpoint if needed
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h2>Data from Django</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li> // Adjust based on API response
        ))}
      </ul>
    </div>
  );
};

export default FetchData;
