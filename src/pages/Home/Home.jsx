import { Hits, Header } from "../../components/";
import { NavLink } from "react-router-dom";
import Helmet from "react-helmet";
import hitsProduct from "../../helpers/hits.json";
import React from "react";
import img from "./bg.png";
import "./home-style.css";
import "../../index.css";

function Home() {
  return (
    <>
      <Helmet>
        <title>Swift</title>
        <body className="home-page"></body>
      </Helmet>
      <main className="main">
        <Header />
        <div className="main-container">
          <div className="title">
            <p className="the">THE</p>
            <p className="next">NEXT</p>
            <p className="step">STEP</p>
            <NavLink to="/store">
              <button>Магазин</button>
            </NavLink>
          </div>
          <img className="bg" src={img} alt="" />
        </div>
      </main>
      <h2 className="hits">Хиты</h2>
      <hr className="line-home" />
      <div className="products-hits">
        {hitsProduct.hits.map((hit) => (
          <Hits
            key={hit.id}
            title={hit.name}
            subTitle={hit.subname}
            src={hit.image}
            price={hit.price}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
