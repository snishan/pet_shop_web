import React from "react";
import '../../assest/css/homepage.css';
import ServiceSection from "../../components/serviceSection";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Banner from "../../components/banner";
import Categories from "../../components/categories";
import Clothing from "../../components/clothing";
import Foodies from "../../components/foodies";



const HomePage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Categories />
      <Clothing />
      <Foodies />
      <ServiceSection />
      <Footer />
    </div>

  );
};

export default HomePage;