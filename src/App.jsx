import React from "react";
import { Container } from "@mui/material";
import Header from "./components/Header";
import Banner from "./components/Banner";
import ProductSection from "./components/ProductSection";
import Footer from "./components/Footer";
import products from "./data/products";

export default function App() {
  const newProducts = products.filter((p) => p.category === "new");
  const saleProducts = products.filter((p) => p.category === "sale");

  return (
    <>
      <Header />
      <Banner />
      <Container maxWidth="lg" sx={{ mt: 6 }}>
        <ProductSection title="Новинки" products={newProducts} />
        <ProductSection title="Скидки" products={saleProducts} />
      </Container>
      <Footer />
    </>
  );
}
