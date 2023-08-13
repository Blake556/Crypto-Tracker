import "../styles/App.css";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import Search from "./Search";
import ListCoins from "./ListCoins";
// import axios from "axios";

function App() {
 
  // GET API call

  //const [searchData, setSearchData] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData(); // Call the function to make the GET API call
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/search");
      const jsonData = await response.json();
      setData(jsonData);
      //console.log(jsonData)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  console.log(data)



  return (
    <div className="App-outer">
      <div className="header d-flex justify-content-center align-items-center">
        <FontAwesomeIcon icon={faCoins} className="head-icon" size="3x" />
        <h1 className="title">
          Crypto <span>tracker</span>
        </h1>
      </div>
      <Search
        //searchData={searchData}
        //setSearchData={setSearchData}
        // handleSearch={handleSearch}
      />
      <ListCoins />



    </div>
  );
}

export default App;
