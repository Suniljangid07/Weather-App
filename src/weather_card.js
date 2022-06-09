import React, { useEffect, useState } from "react";
import "./App.css";
import img from "./Images/cloud_sunny.gif";
import img2 from "./Images/cloud_rain.gif";
// import "boxicons";

const WeatherCard = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Jodhpur");
  const [Temperature, setTemperature] = useState(null);
  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=6a818c47af89226a77ff1b188f1a2115&units=metric`;
      const response = await fetch(url);
      const resJson = await response.json();
      // console.log(resJson.main);
      setCity(resJson.main);
      setTemperature (city.temp);
      // console.log("temperature", Temperature);
    };

    fetchApi();
  }, [search, city, Temperature]);

  return (
    <div className="App">
      <div className="main-container">
        <div className="weather-card">
          <div className="inputcontainer">
            <input
              type="searchbox"
              className="searchbox"
              value={search}
              placeholder="City"
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
            <img className="cloud-upload" src={Temperature > 30 ? img : img2 } alt="not found" />
          </div>
          {!city ? (
            <p>No Data found</p>
          ) : (
            <div>
              {/* <i className='bx bxs-cloud-lightning'></i> */}
              <h2 className="city-title">{search}</h2>
              <h2 className="temperature">
                <i class="bx bx-street-view"></i>
                {city.temp}°
              </h2>
              <p className="min-max-tamp">
                Min {city.temp_min}° || Max {city.temp_max}°{" "}
              </p>
              <h2 className="Feelslike">Feels  {Temperature < 20 ? "🥶" : Temperature <= 30 ? "😍" : "🥵"}</h2>
             
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;

// {city.main.temp_min
// {city.main.temp_max}
