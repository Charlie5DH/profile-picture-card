import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";

import "./index.css";
import Cards from "./pages/Cards";

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route exact path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" exact element={<Home />} />
        <Route path="/cards" exact element={<Cards />} />
      </Routes>
    </div>
  );
};

export default App;
