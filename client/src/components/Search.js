import "../styles/Search.css";
import React, {useState} from 'react';

function Search(props) {


  const [searchData, setSearchData] = useState('');

  console.log(searchData)

function handleSearch(event) {

  event.preventDefault();

    fetch("/api/search", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }, 
      body: JSON.stringify({searchData}), 
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
    })
    .catch((error) => {
      console.error(error)
    });
  }



  return (
    <div className="Search-body d-flex justify-content-center align-items-center">
      <form onSubmit={handleSearch}>
        <div className="search-container">
          <button className="" type="submit" id="search">GO</button>
          <input 
            className="" 
            type="text" 
            placeholder="Searh crypto" 
            value={searchData} 
            onChange={(event) => setSearchData(event.target.value)} 
          />
        </div>
      </form>
    </div>
  );
}

export default Search; 