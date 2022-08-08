import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Post from "../components/Post";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <>
      <Nav />
      <Slider />
      <Post />
      <Footer />
    </>
  );
};

export default Home;
