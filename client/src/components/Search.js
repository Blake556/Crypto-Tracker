import "../styles/Search.css";
import React, {useState} from 'react';

function Search(props) {

    function handleInputChange(event) {
      const inputValue = event.target.value;
      props.setSearchData(inputValue);
    }
    
    const handleFormSubmit = (event) => {
      event.preventDefault();
      props.handleSearch(event); // Pass the event object to the handleSearch function
    };
  


  return (
    <div className="Search-body d-flex justify-content-center align-items-center">
    <form onSubmit={handleFormSubmit}>
      <div className="search-container">
        <button className="" type="submit" id="search">GO</button>
        <input 
          className="" 
          type="text" 
          placeholder="Search crypto" 
          value={props.searchData} 
          onChange={handleInputChange} 
        />
      </div>
    </form>
  </div>

  );
}

export default Search; 