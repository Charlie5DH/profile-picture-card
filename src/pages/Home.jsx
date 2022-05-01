import React from "react";
import { Link } from "react-router-dom";

import "./index.css";

const Home = () => {
  return (
    <div className="page-link">
      <Link to={"/cards"} className="link">
        <h2>Check Cards</h2>
      </Link>
      <Link to={"/menus"} className="link">
        <h2>Menus</h2>
      </Link>
    </div>
  );
};

export default Home;
