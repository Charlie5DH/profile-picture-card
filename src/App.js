import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Cards from "./pages/Cards";
import Menus from "./pages/Menus";
import "./index.css";

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route exact path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" exact element={<Home />} />
        <Route path="/cards" exact element={<Cards />} />
        <Route path="/menus" exact element={<Menus />} />
      </Routes>
    </div>
  );
};

export default App;
