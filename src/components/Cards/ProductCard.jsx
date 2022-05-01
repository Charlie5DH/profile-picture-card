import React from "react";
import "./ProductCard.css";

const ProductCard = ({ image, title, subtitle, details }) => {
  return (
    <div className="product-card">
      <div className="product-card-imageBox">
        <img src={image} alt="product" />
      </div>
      <div className="product-card-details">
        <h3>
          {title}
          <br />
          <span>{subtitle}</span>
        </h3>
        <h4>Product details</h4>
        <p>{details}</p>
        <h4>Size</h4>
        <ul className="product-card-details-sizes">
          <li>36</li>
          <li>37</li>
          <li>38</li>
          <li>39</li>
          <li>40</li>
          <li>42</li>
          <li>44</li>
        </ul>
        <div className="product-card-group">
          <h2>
            R$849<small>.99</small>
          </h2>
          <a href="#">Add to cart</a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
