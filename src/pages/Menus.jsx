import React from "react";
import Dropdown from "../components/menu/Dropdown";
import FloatingSideMenu from "../components/menu/FloatingSideMenu";

import "./index.css";

const Menus = () => {
  return (
    <div className="components">
      <div className="item">
        <FloatingSideMenu />
      </div>
      <div className="item">
        <Dropdown />
      </div>
    </div>
  );
};

export default Menus;
