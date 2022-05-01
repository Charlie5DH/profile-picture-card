import React from "react";
import image from "../../images/responsivecard.png";
import "./ResponsiveCard.css";

const ResponsiveCard = () => {
  return (
    <div className="responsive-card">
      <div className="responsive-card-circle"></div>
      <div className="responsive-card-content">
        <h2>Working Together</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{" "}
        </p>
        <a href="#">Learn More</a>
      </div>
      <img src={image} alt="" />
    </div>
  );
};

export default ResponsiveCard;
