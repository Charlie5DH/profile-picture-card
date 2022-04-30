import React from "react";
import ProductCard from "../components/Cards/ProductCard";
import ProfilePicCard from "../components/Cards/ProfilePicCard";
import "./index.css";

const Cards = () => {
  return (
    <div className="components">
      <div className="item">
        <ProfilePicCard />
      </div>
      <div className="item">
        <ProductCard />
      </div>
    </div>
  );
};

export default Cards;
