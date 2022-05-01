import React from "react";
import ProductCard from "../components/Cards/ProductCard";
import ProfilePicCard from "../components/Cards/ProfilePicCard";
import ResponsiveCard from "../components/Cards/ResponsiveCard";
import "./index.css";

const Cards = () => {
  return (
    <div className="components">
      <div className="item">
        <ProfilePicCard />
      </div>
      <div className="products-items-container">
        <div className="item">
          <ProductCard
            image={
              "https://images.lojanike.com.br/500x500/produto/tenis-nike-sportswear-air-force-1-07-premium-masculino-DC8891-001-1-11633630681.jpg"
            }
            title="Nike Air Force 1 '07 Premium"
            subtitle="Premium Masculino"
            details={
              <>
                O brilho perdura no Nike Air Force 1 '07 Premium, o clássico do
                basquete que traz um toque de frescor àquilo que você já conhece
                bem.
                <br />
                Sobreposições costuradas, cores ousadas e o estilo de basquete
                perfeito para chamar a atenção.
              </>
            }
          />
        </div>
        <div className="item">
          <ProductCard
            image={
              "https://images.lojanike.com.br/500x500/produto/tenis-air-max-90-masculino-DH4619-001-1-11641921147.jpg"
            }
            title="Tênis Air Max 90"
            subtitle="Casual Masculino"
            details={
              <>
                Renda-se ao legado. Usado por presidentes e revolucionado por
                meio de colaborações icônicas, o tênis de corrida que ajudou a
                definir os anos 90 agora é um item básico da moda urbana. Não
                importa quanto tempo passe, a estética eternamente descolada, e
                o amortecimento Air exposto mantêm o Air Max 90 mais vivo do que
                nunca.
              </>
            }
          />
        </div>
      </div>
      <div className="item">
        <ResponsiveCard />
      </div>
    </div>
  );
};

export default Cards;
