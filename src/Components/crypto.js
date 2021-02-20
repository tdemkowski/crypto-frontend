import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import ada from "../Logos/ada.svg";
import bch from "../Logos/bch.svg";
import bnb from "../Logos/bnb.svg";
import btc from "../Logos/btc.svg";
import dot from "../Logos/dot.svg";
import eth from "../Logos/eth.svg";
import link from "../Logos/link.svg";
import ltc from "../Logos/ltc.svg";
import usdc from "../Logos/usdc.svg";
import usdt from "../Logos/usdt.svg";
import xlm from "../Logos/xlm.svg";
import xrp from "../Logos/xrp.svg";

const logos = {
  ada: ada,
  bch: bch,
  bnb: bnb,
  btc: btc,
  dot: dot,
  eth: eth,
  link: link,
  ltc: ltc,
  usdc: usdc,
  usdt: usdt,
  xlm: xlm,
  xrp: xrp,
};

const Crypto = props => {
  const display = (logo, symbol, name, price, change) => {
    if (!(symbol && name && price && name)) {
      console.log("ERROR ON DISPLAY");
    }
    price = Math.round(price * 100) / 100;
    change = Math.round(change * 10) / 10;
    return (
      <Link className="crypto-link" to={"/" + symbol} key={symbol + "_key"}>
        <motion.div
          exit={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="crypto"
        >
          {/* <img src={ICON_LOCATION + id + '.png'} className="logo" alt=""></img> */}
          <img src={logo} className="logo" alt=""></img>
          <h3 className="name">{name}</h3>
          <div className="info">
            <p className="info-item">{"$" + price}</p>
            <p className="info-item" style={{ color: "red" }}>
              {change + "%"}
            </p>
          </div>
        </motion.div>
      </Link>
    );
  };

  if (props.data) {
    return (
      <div className="crypto-wrapper">
        {props.data.map(i => {
          return display(
            logos[i.symbol.toLowerCase()],
            i.symbol,
            i.name,
            i.price,
            i.change
          );
        })}
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Crypto;
