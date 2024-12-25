import { useEffect, useState } from "react";
import nasaLogo from "./assets/nasa-6.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchNasaData = async () => {
      const response = await axios.get(import.meta.env.VITE_NASA_API_URL, {
        params: {
          api_key: import.meta.env.VITE_NASA_API_KEY,
        },
      });
      setData(response?.data);
      console.log("Response :", response);
    };
    fetchNasaData();
  }, []);

  return (
    <>
      <div>
        <a href="https://www.nasa.gov/" target="_blank">
          <img src={nasaLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>NASA Astronomy Pic of the Day</h1>
      {data ? (
        <>
          <h2>{data.title}</h2>
          <i>{data.date}</i>
          <p>{data.explanation}</p>
          <div className="card">
            <img src={data.hdurl} alt="APOD" className="nasa-pic" />
          </div>
        </>
      ) : (
        <p>Loading ...</p>
      )}
    </>
  );
}

export default App;
