import React from "react";
import StarIcon from "@mui/icons-material/Star";
import AddIcon from "@mui/icons-material/Add";
import foodImg from "../../../assets/icons/pexels-roman-odintsov-4871111 3 (1).png";
import "./PopularFoodCard.css";

export default function PopularFoodCard() {
  return (
    <div className="food__card-container">
      <div className="food__card-header">
        <div className="food__card-qty flex-center">5 left </div>
        <div className="food__card-offer">30% off</div>
      </div>
      <div className="food__card-img flex-center">
        <img src={foodImg} alt="" />

        <div className="food__card-add-btn flex-center">
          <AddIcon style={{ color: "white" }} />
        </div>
      </div>
      <div className="food__card-details">
        <div className="food__card-details-left">
          <h2>Paneer tikka</h2>
          <div className="food__card-details-price">
            <span className="food__card-details-price-old">₹ 190</span>
            <span className="food__card-details-price-new">₹ 133</span>
          </div>
        </div>
        <div className="food__card-details-right product__rating">
          <StarIcon style={{ color: "#FF2951", fontSize: "0.8rem" }} />
          <span>4.3</span>
        </div>
      </div>
    </div>
  );
}
