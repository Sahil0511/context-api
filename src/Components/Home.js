import React, { useState } from "react";
import { faker } from "@faker-js/faker";

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
        {product.map((currElem) => {
          console.log(currElem.id);
        })}
      </div>
    </>
  );
};

export default Home;
