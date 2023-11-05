import React from "react";
import Navbar from "../components/Navbar";
import "../css/homepage.css";
import ImgHeader from "../components/ImgHeader";
import MainPage from "../components/MainPage";


const HomePage = () => {
  return (
    <div>
      <div className="box-container">
        {/* background image */}
        <Navbar />
        <ImgHeader/>  
      </div>
      <MainPage/>
    </div>
  );
};

export default HomePage;
