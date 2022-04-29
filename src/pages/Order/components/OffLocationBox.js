import React from "react";
import "./OffLocationBox.css";

export default function OffLocationBox() {
  return (
    <div className="offlocation__container">
      <div className="offlocation__left">
        <h2>Location Permission is off</h2>
        <p>
          Please allow nirvana access to your location to find restaurants near
          you
        </p>
      </div>
      <div className="offlocation__right flex-center">
        <a href="/" className="grant__link flex-center">
          Grant
        </a>
      </div>
    </div>
  );
}
