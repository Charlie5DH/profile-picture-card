import React from "react";
import "./ProductCard.css";

const ProductCard = () => {
  return (
    <div className="product-card">
      <div className="product-card-imageBox">
        <img
          src="https://images.lojanike.com.br/500x500/produto/tenis-nike-sportswear-air-force-1-07-premium-masculino-DC8891-001-1-11633630681.jpg"
          alt="product"
        />
      </div>
      <div className="product-card-details">
        <h3>
          Nike Air Force 1' 07
          <br />
          <span>Premium Masculino</span>
        </h3>
        <h4>Product details</h4>
        <p>
          O brilho perdura no Nike Air Force 1 '07 Premium, o clássico do
          basquete que traz um toque de frescor àquilo que você já conhece bem.
          <br />
          Sobreposições costuradas, cores ousadas e o estilo de basquete
          perfeito para chamar a atenção.
        </p>
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
