import React from "react";
import ProductBox from "./ProductBox";
import pimage1 from "../images/s1.png";
import pimage2 from "../images/s2.png";

function Products() {
  return (
    <div id="products">
      <h1>Choose &Enjoy</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia error
        deleniti pariatur.
      </p>
      <div className="a-container">
        <ProductBox image={pimage1} title="Luger Burger" />
        <ProductBox image={pimage2} title="Luger Burger" />

        <ProductBox image={pimage1} title="Luger Burger" />
      </div>
    </div>
  );
}

export default Products;
