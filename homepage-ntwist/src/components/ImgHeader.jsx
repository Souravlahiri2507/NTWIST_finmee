import React from "react";
import "../css/ImgHeader.css";

const ImgHeader = () => {
  return (
    <>
    <div className="flex-container-header">
      <div className="box">
        <h1 className="heading">
          Data-powered solutions for Industrial Excellence
        </h1>
        <button className="button">Read More</button>
      </div>
      <div className="box">
        <img
          className="image"
          src="https://ntwist.com/wp-content/uploads/2023/01/home-image-icons-v6.png"
          alt="Icon"
        />
      </div>
    </div>
    </>
  );
};

export default ImgHeader;
