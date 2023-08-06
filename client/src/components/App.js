import "../styles/App.css";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import Search from "./Search";
import ListCoins from "./ListCoins";

function App() {
  //const [backendData, setBackendData] = useState([]);

  // useEffect(() => {
  //   fetch("/api").then(
  //     response => response.json()
  //   ).then(
  //     data => {
  //       setBackendData(data.users);
  //     }
  //   )
  // }, []);

  const [searchData, setSearchData] = useState("");

  console.log(searchData);

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
      <ListCoins />

      {/*  
      {(backendData.length === 0) ? (
        <p>Loading...</p>
      ) : (
        backendData.map((user, i) => (
          <p key={i}>{user}</p>
        ))
      )}
    */}
    </div>
  );
}

export default App;
