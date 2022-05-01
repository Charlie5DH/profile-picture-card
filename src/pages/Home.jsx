import React from "react";
import { Link } from "react-router-dom";

import "./index.css";

const Home = () => {
  return (
    <div className="page-link">
      <div className="container">
        <div className="box">
          <Link to={"/cards"} className="link">
            <div className="list-content">
              <div className="list-icon">
                <ion-icon name="id-card-outline"></ion-icon>
              </div>
              <div className="list-text">
                <h3>Check Cards</h3>
                <p>Some cards design for products and profiles</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="box">
          <Link to={"/menus"} className="link">
            <div className="list-content">
              <div className="list-icon">
                <ion-icon name="grid-outline"></ion-icon>
              </div>
              <div className="list-text">
                <h3>Check Menus</h3>
                <p>Sidebar, dropdown and navbar menus</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="box">
          <Link to={"/buttons"} className="link">
            <div className="list-content">
              <div className="list-icon">
                <ion-icon name="radio-button-on-outline"></ion-icon>
              </div>
              <div className="list-text">
                <h3>Check Buttons</h3>
                <p>Button examples</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="box">
          <Link to={"/others"} className="link">
            <div className="list-content">
              <div className="list-icon">
                <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
              </div>
              <div className="list-text">
                <h3>Other Components</h3>
                <p>Much more ...</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
