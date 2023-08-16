import "../styles/Coin.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBitcoin, faEthereum } from "@fortawesome/free-brands-svg-icons";

function Coin(props) {


  let coinData = props.data
  // let btc
  // setTimeout(() => {
  //   btc = coinData[0].id
  //   console.log(btc)
  //   console.log(coinData[0].current_price)
  //   console.log(coinData[0].market_cap_change_percentage_24h)
  // }, "1000");

  

  return (
    <div className="Coin-body">
      <div className="coin-header d-flex justify-content-between">
        <span>#</span>
        <span>Coin</span>
        <span>Price</span>
        <span>24h</span>
      </div>

      {coinData.map((coin, index) => (

      
      <div  key={index} className="coin-data-container d-flex justify-content-between align-items-center">
        <span>{index + 1}</span>
        <div className="d-flex align-items-center">
      <img src={coin.image} className="coin-icon" />
          <span>{coin.id}</span>
        </div>
        <span>{coin.current_price}</span>
        <span>{coin.market_cap_change_percentage_24h}</span>
      </div>
      )) 
        }
      
      
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
