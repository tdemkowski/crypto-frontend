import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const style = {
  margin: "0",
  padding: "0",
};

const CryptoFocused = props => {
  return (
    <motion.div
      className="crypto-focused"
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link to="/">
        <div className="return">
          {" "}
          <h1>{"<"}</h1>
          <p>return</p>
        </div>
      </Link>
      <div className="logo-section">
        <img src={props.logo} className="logo" alt="logo"></img>

        <h3 className="name">{props.name}</h3>
      </div>

      <div className="info">
        <p style={style}>Current Price</p>
        <div style={{ display: "flex", justifyContent: "center" }} className="info-item-wrapper">
          <h1 style={style} className="info-item thin large">
            {"$" + props.price.toLocaleString("en")}
          </h1>
          <h1
            className="info-item thin large"
            style={{
              ...style,
              color: "red",
              marginBottom: "3.5rem",
              marginLeft: "1rem",
            }}
          >
            {"(" + props.change + "%)"}
          </h1>
        </div>

        <p style={style} className="info-item">
          Market Total Supply
        </p>
        <h1 style={{ ...style, marginBottom: "3.5rem" }} className="thin large">
          {props.max_supply
            ? props.max_supply.toLocaleString("en") + " ADA"
            : "none"}
        </h1>

        <p style={style} className="info-item">
          Market Cap
        </p>
        <h1 style={{ ...style, marginBottom: "3.5rem" }} className="thin large">
          $4,956,857,480.178,035
        </h1>
      </div>
    </motion.div>
  );
};

export default CryptoFocused;
