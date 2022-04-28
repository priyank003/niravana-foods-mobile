import React from "react";
import "./PopularFoodPost.css";
import restaurantIcon from "../../../assets/icons/pexels-roman-odintsov-4871111 3.png";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
export default function PopularFoodPost() {
  return (
    <React.Fragment>
      <div className="popular__food-post-container">
        <div className="popular__food-post-left">
          <div className="popular-food-post-icon">
            <img src={restaurantIcon} alt="" />
          </div>
          <div className="popular-food-post-details post__details-header">
            <h2>Funky Tacos</h2>
            <p>Rajendra Place</p>
          </div>
          <div className="popular-food-post-rating">
            <StarIcon style={{ color: "#FF2951" }} fontSize="small" />
            <span>4.3</span>
          </div>
        </div>
        <div className="popular-food-post-right">
          <FavoriteBorderIcon style={{ color: "#FF2951" }} />
          <ArrowForwardIosIcon />
        </div>
      </div>
    </React.Fragment>
  );
}
