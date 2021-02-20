import React, { useState, useEffect } from "react";

import "./info.scss";

const Info = () => {
  const [open, setOpen] = useState(false);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    if (open && opacity === 0) {
      setOpacity(1)
    }
  }, [open]);

  const trigger = (e) => {
    if (open) {
      setOpacity(0)
      setTimeout(() => {
        setOpen(false)
      }, 200)
    } else {
      setOpacity(0)
      setOpen(true)
    }
  };

  const modal = () => {
    return (
      <div
        className="app-info-modal"
        onClick={e => trigger(e)}
        style={{ opacity: opacity, transitionDuration: "0.2s" }}
      >
        <div className="app-info-window" style={{top: 10*(1-opacity) + 'rem', transitionDuration: "0.2s"}}>
          <h3>CryptoApp</h3>
          <p>
            Cryptocurrencies emerged in 2009 with the first decentralized
            cryptocurrency - <a href="https://bitcoin.org/en/" target="_blank" rel="noopener noreferrer">Bitcoin</a>. As of today - more than 700 digital
            currencies exist with a total market capitalization greater than 100
            billion USD.
          </p>
          <p>
            <a>CryptoApp</a> is a real-time dashboard that displays the top 10
            cryptocurrencies based on currency price, market capitalization and
            overall circulating supply - obtained from the leading
            cryptocurrency resource CoinMarketCap.
          </p>
          <p>
            This project was built with <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a>. It serves as a great UI/UX exercise alongside some backend practice with Node and Express!
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="app-info-wrapper">
      <div
        className="app-info"
        onClick={() => setOpen(!open)}
        style={{ opacity: open ? 0 : 1 }}
      >
        <p>?</p>
      </div>
      {open ? modal() : null}
    </div>
  );
};

export default Info;
