import React from "react";
import "./PopularRestaurantPost.css";
import StarIcon from "@mui/icons-material/Star";
import foodImg from "../../../assets/icons/pexels-roman-odintsov-4871111 3 (1).png";
import { Row } from "react-bootstrap";
export default function PopularRestaurantPost() {
  return (
    <div className="restaurant__post-container">
      <div className="restaurant__post-left">
        <div className="restaurant__post-img flex-center">
          <img src={foodImg} alt="foodimg " />
        </div>
        <div className="restaurant__post-details post__details-header">
          <h2>Renaissance Castle</h2>
          <p>North Indian, Mughlai, rolls</p>
          <Row style={{ alignItems: "center" }}>
            <div className="restaurant__post-rating product__rating col-4">
              <StarIcon style={{ color: "#FF2951", fontSize: "0.8rem" }} />
              <span>4.3</span>
            </div>
            <p className="col-4" style={{ marginLeft: "5px" }}>
              Patel Nagar{" "}
            </p>
          </Row>
        </div>
      </div>
      <div className="restaurant__post-right">
        <div className="restaurant__post-offers">30-40 % Off</div>
        <div className="restaurant__post-food-timing">20-25 mins</div>
      </div>
    </div>
  );
}
