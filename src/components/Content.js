import React from "react";
import ImageOne from "../images/selfie.jpeg";

const Content = () => {
  return (
    <div className="selfie-card">
      <img
        src={ImageOne}
        alt="selfie"
        className="h-full rounded mb-20 shadow"
      />
      <div className="center-content">
        <h2 className="text-2xl mb-2">Jonathan Koss</h2>
      </div>
    </div>
  );
};

export default Content;
