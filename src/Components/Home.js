import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import SingleProd from "./SingleProd";
import "./index.css";

faker.seed(100);

const Home = () => {
  const prodArray = [...Array(20)].map((index) => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.url(),
  }));

  const [product] = useState(prodArray);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <span style={{ fontSize: 30 }}>Products Page</span>
        <div className="productContainer">
          {product.map((prod) => (
            <SingleProd prod={prod} key={prod.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
