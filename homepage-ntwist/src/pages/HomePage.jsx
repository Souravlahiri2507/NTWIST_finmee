import React from "react";
import Navbar from "../components/Navbar";
import "../css/homepage.css";
import ImgHeader from "../components/ImgHeader";


const HomePage = () => {
  return (
    <div>
      <div className="box-container">
        {/* background image */}
        <Navbar />
        <ImgHeader/>  
      </div>
      
    </div>
  );
};

export default HomePage;
