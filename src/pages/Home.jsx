import React from "react";
import { useSelector } from "react-redux";
import Products from "../components/Products/Products";
function Home() {
  const { productsFromSearch } = useSelector((state) => state.products);
  return <Products products={productsFromSearch} />;
}

export default Home;
