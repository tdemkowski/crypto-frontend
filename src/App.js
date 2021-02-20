import "./App.scss";

import ada from "./Logos/ada.svg";
import bch from "./Logos/bch.svg";
import bnb from "./Logos/bnb.svg";
import btc from "./Logos/btc.svg";
import dot from "./Logos/dot.svg";
import eth from "./Logos/eth.svg";
import link from "./Logos/link.svg";
import ltc from "./Logos/ltc.svg";
import usdc from "./Logos/usdc.svg";
import usdt from "./Logos/usdt.svg";
import xlm from "./Logos/xlm.svg";
import xrp from "./Logos/xrp.svg";

import { useEffect, useState } from "react";
import Particles from "react-particles-js";
import Crypto from "./Components/crypto";
import CryptoFocused from "./Components/cryptoFocused";
import Info from "./Components/info";
import { Helmet } from "react-helmet";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { particleParams } from "./particleParams";

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

const HEROKU_URI = "https://crypto-acurac.herokuapp.com/";

const TITLE = "Crypto";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchCurrencies();
  }, []);

  const fetchCurrencies = () => {
    fetch(HEROKU_URI + "crypto", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(result => result.json())
      .then(result => {
        return setData(result);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <Particles
        params={particleParams}
        style={{ color: "red" }}
        className="particleBackground"
      />
      {/* <header className="App-header">
      </header> */}
      <Router>
        <AnimatePresence>
          <Switch>

            {!data
              ? null
              : data.map(i => {
                  return (
                    <Route path={"/" + i.symbol} key={i.id}>
                      <CryptoFocused
                        // logo={ICON_LOCATION + i.id + '.png'}
                        logo={logos[i.symbol.toLowerCase()]}
                        symbol={i.symbol}
                        name={i.name}
                        price={i.price}
                        change={i.change}
                        max_supply={i.max_supply}
                        market_cap={i.market_cap}
                      />
                    </Route>
                  );
                })}

            <Route path="/">
              <Crypto data={data} />
            </Route>
          </Switch>
        </AnimatePresence>
      </Router>

      <Info />
    </div>
  );
}

export default App;
