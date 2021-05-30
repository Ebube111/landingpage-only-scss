import React from "react";
import about from "../img/about-me.png";

const ImageSection = () => {
  return (
    <div className="ImageSection">
      <div className="img">
        <img src={about} alt="about-image" />
      </div>
      <div className="about-info">
        <h4>
          I am <span>Lorem Ipsum</span>
        </h4>
        <p className="about-text">
          Lorem Ipsum Dolor kdlklkn and hjtbemk,emnn,md,m,m hjfhkj the man si
          com sion jkjd hrrehrl;l' bffn,fmf,f/wwjnwlw,mdnjrkjrl while i was at
          work in the eveeniung
        </p>
        <div className="about-details">
          <div className="left-section">
            <p>Full Name</p>
            <p>Nationality</p>
            <p>Residence</p>
          </div>
          <div className="right-section">
            <p>: Ebube Agwaze</p>
            <p>: Nigeria</p>
            <p>: Umuahia, Abia State</p>
          </div>
        </div>
        <button className="btn">Download CV</button>
      </div>
    </div>
  );
};

export default ImageSection;
