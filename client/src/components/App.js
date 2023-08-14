import "../styles/App.css";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import Search from "./Search";
import Coin from "./Coin";
// import axios from "axios";

function App() {
 
  // GET API call

  //const [searchData, setSearchData] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/getData');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  console.log(data);


  // let btc = data[4].current_price
  // console.log(btc)
  // console.log(data[4].current_price)
  // console.log(data[3].current_price)



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
      <Coin data={data}/>
      {/* <p>{btc}</p> */}


    </div>
  );
}

export default App;
