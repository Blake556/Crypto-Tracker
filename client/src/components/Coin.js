import "../styles/Coin.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBitcoin, faEthereum } from "@fortawesome/free-brands-svg-icons";

function Coin() {
  return (
    <div className="Coin-body">
      <div className="coin-header d-flex justify-content-between">
        <span>#</span>
        <span>Coin</span>
        <span>Price</span>
        <span>24h</span>
      </div>

      
      <div className="coin-data-container d-flex justify-content-between align-items-center">
        <span>1</span>
        <div className="d-flex align-items-center">
          <FontAwesomeIcon icon={faBitcoin} className="coin-icon" />
          <span>BTC</span>
        </div>
        <span>$29,207</span>
        <span>1.97%</span>
      </div>
      
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
