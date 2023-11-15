// import React from 'react';
import Navbar from "../NavBar/navbar";
import Carousel from "./Carousel/carousel";
import All from "./All/all";
import Cards from "./Cards/cards";
import Card1 from "./Cards1/card1";
import Card2 from "./Cards2/card2";
import Footer from "./Footer";

const UserLayout = () => {
  return (
    <div style={{ backgroundColor: "#1e1e2f" }}>
      <Navbar />
      <Carousel />
      <All />
      <div className="container">
        <Cards />
        <Card1 />
        <Card2 />
      </div>
      <Footer />
    </div>
  );
};

export default UserLayout;
