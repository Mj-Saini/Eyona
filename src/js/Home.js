import React from "react";
import Loader from "../components/Loader";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Passion from "../components/Passion";
import Experts from "../components/Experts";
import Product from "../components/Product";
import Relation from "../components/Relation";
import Talk from "../components/Talk";
import Magic from "../components/Magic";
import Team from "../components/Team";
import JoinUs from "../components/JoinUs";
import Footer from "../components/Footer";
import BackTop from "../components/BackToTop";

function Home() {
  return (
    <div className="overflow-hidden">
      <Loader />
      <BackTop />
      <Header />
      <Hero />
      <Passion />
      <Experts />
      <Product />
      <Relation />
      <Talk />
      <Magic />
      <Team />
      <JoinUs />
      <Footer />
    </div>
  );
}

export default Home;
