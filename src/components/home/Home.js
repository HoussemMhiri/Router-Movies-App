import React from "react";
import "./HomeStyle.css";
import { Link } from "react-router-dom";

const Home = ({ bool }) => {
  return (
    <section className="home">
      <h1>Home Of Movies</h1>
      <Link to="/cards">
        <button onClick={bool} className="btns">
          {" "}
          Enter
        </button>
      </Link>
    </section>
  );
};

export default Home;
