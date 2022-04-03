import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg"
        alt=""
      />

      {/* Prodcut id, title, price, rating, image */}
      <div className="home__row">
        <Product
          id="1233"
          title="Paw Patrol, Kitty Catastrophe Gift Set with 8 Collectible Toy Figures"
          price={19.96}
          rating={3}
          image="https://m.media-amazon.com/images/I/71mJTRW0soL._AC_SX425_.jpg"
        />

        <Product
          id="12443"
          title="Mercurial Vapor XI FG (831958-303) Electric Green Size 6"
          price={141.96}
          rating={4}
          image="https://m.media-amazon.com/images/I/51fkx+hY-uL._AC_UX575_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="11232123"
          title="Substitute shirt of the biggest club in South America"
          price={99.99}
          rating={5}
          image="https://www.91futbol.com/images/2021/0622/fc2122-a106.jpg"
        />
        <Product
          id="12443"
          title="Lean Analytics: Use Data to Build a Better Startup"
          price={11.96}
          rating={4}
          image="https://m.media-amazon.com/images/I/71UuvH3OzNL._AC_UY218_.jpg"
        />
        <Product
          id="123"
          title="Argentina Adidas AFA Football Soccer T-Shirt "
          price={77.96}
          rating={4}
          image="https://m.media-amazon.com/images/I/61-zxUbCYwL._AC_UX679_.jpg"
        />

        <Product
          id="12443"
          title="Garmin 010-02064-00 Instinct, with GPS GarminTime"
          price={189.96}
          rating={4}
          image="https://m.media-amazon.com/images/I/6181t0057sL._AC_UY218_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="1324423"
          title="SAMSUNG 34-Inch G5 Gaming Monitor with 1000R Curved Screen"
          price={599.69}
          rating={3}
          image="https://m.media-amazon.com/images/I/61XDeaOrrKL._AC_SL1000_.jpg"
        />
        <Product
          id="1324423"
          title="PlayStation 4 500GB Console (Renewed), with all you need PS4v2"
          price={430.69}
          rating={5}
          image="https://m.media-amazon.com/images/I/41A5YRynOAL._SX522_.jpg"
        />
        <Product
          id="1423"
          title="2021 Apple MacBook Pro (14-inch, Apple M1 Pro chip) - Space Gray"
          price={2511.01}
          rating={5}
          image="https://m.media-amazon.com/images/I/61vFO3R5UNL._AC_SX342_.jpg"
        />
      </div>
      {/* Prodcut */}
    </div>
  );
}

export default Home;
