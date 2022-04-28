import React from "react";
import "./Order.css";
import mapImg from "../../assets/icons/map.png";
import OffLocationBox from "./components/OffLocationBox";
import OrderForm from "./components/OrderForm";

export default function Order() {
  return (
    <div className="app__order-container">
      <div className="app__order-map">
        <img src={mapImg} alt="mapImg" />
      </div>
      <div className="app__order-location-dialogue">
        <OffLocationBox />
      </div>
      <div className="app__order-form">
        <div className="app__order-form-header">
          <h2>Add Delivery Address :</h2>
          <span>All fields are required</span>
        </div>
        <OrderForm />
      </div>
    </div>
  );
}
