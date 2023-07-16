import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import SingleProd from "./SingleProd";
import "./index.css";

faker.seed(20);

const Home = () => {
  const prodArray = [...Array(20)].map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.url(),
  }));

  const [product] = useState(prodArray);

  return (
    <>
      <div className="productContainer">
        {product.map((prod, index) => {
          return <SingleProd keyV={index} prod={prod} />;
        })}
      </div>
    </>
  );
};

export default Home;
