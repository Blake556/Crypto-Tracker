import "../styles/Coin.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBitcoin, faEthereum } from "@fortawesome/free-brands-svg-icons";

function Coin(props) {

  let coinData = props.data
  let btc = coinData[0].id
  let price = coinData[0].current_price
  let hours = coinData[0].market_cap_change_percentage_24h
  console.log(coinData)
  // console.log(coinData[0].id)
  // console.log(coinData[0].current_price)
  // console.log(coinData[0].market_cap_change_percentage_24h)
  

  return (
    <div className="Coin-body">
      <div className="coin-header d-flex justify-content-between">
        <span>#</span>
        <span>Coin</span>
        <span>Price</span>
        <span>24h</span>
      </div>

      {/* {coinData.map(d => { */}

      
      <div className="coin-data-container d-flex justify-content-between align-items-center">
        <span>1</span>
        <div className="d-flex align-items-center">
          <FontAwesomeIcon icon={faBitcoin} className="coin-icon" />
          <span>{btc}</span>
        </div>
        <span>{price}</span>
        <span>{hours}</span>
      </div>
        {/* }) */}
      {/* } */}
      
      {/* <div className="coin-data-container d-flex justify-content-between align-items-center">
        <span>2</span>
        <div className="d-flex align-items-center">
          <FontAwesomeIcon icon={faEthereum} className="coin-icon eth" />
          <span>ETH</span>
        </div>
        <span>$1,832</span>
        <span>-2.00%</span>
      </div> */}

      
    </div>
  );
}

export default Coin;
