import "../styles/App.css";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import Search from "./Search";
import Coin from "./Coin";
// import axios from "axios";

function App() {
 
  // GET API call

  const [searchData, setSearchData] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const hasFetchedData = localStorage.getItem("hasFetchedData");

    if (!hasFetchedData) {
      fetchData();
    } else {
      // If data is already fetched, get it from localStorage
      const cachedData = JSON.parse(localStorage.getItem("cryptoData"));
      setData(cachedData);
    }
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/getData");
      if (!response.ok) {
        throw new Error("API request failed");
      }
      const jsonData = await response.json();
      console.log("API Response:", jsonData);
      setData(jsonData);
      // Store data in localStorage
      localStorage.setItem("cryptoData", JSON.stringify(jsonData));
      // Mark that data has been fetched
      localStorage.setItem("hasFetchedData", "true");
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  //console.log(data);


  // let btc = data[4].current_price
  // console.log(btc)
  // console.log(data[4].current_price)
  // console.log(data[3].current_price)

  // POST API Call to make a search

  function handleSearch(event) {
    
    event.preventDefault();

    fetch("/api/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ searchData }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }



  return (
    <div className="App-outer">
      <div className="header d-flex justify-content-center align-items-center">
        <FontAwesomeIcon icon={faCoins} className="head-icon" size="3x" />
        <h1 className="title">
          Crypto <span>tracker</span>
        </h1>
      </div>
      <Search
        searchData={searchData}
        setSearchData={setSearchData}
        handleSearch={handleSearch}
      />
      <Coin data={data}/>
      {/* <p>{btc}</p> */}


    </div>
  );
}

export default App;
