import React from "react";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PopularFoodPost from "./components/PopularFoodPost";
import PopularFoodCard from "./components/PopularFoodCard";
import PopularRestaurantPost from "./components/PopularRestaurantPost";
import FoodCategory from "./components/FoodCategory";

import "./Home.css";

export default function Home() {
  return (
    <div className="app__home-container">
      <div className="app__home-location-top-bar">
        <div className="app__home-location-div">
          <LocationOnIcon style={{ color: "#FF2951" }} />
          <p> Vikhroli West, Mumbai, Maharashtra</p>
        </div>
        <AccountCircleIcon fontSize="large" />
      </div>
      <div className="app__home-food-category">
        <FoodCategory />
      </div>
      <div className="app__home-popular-food">
        <div className="app__home-popular-food-header app__home-posts-header">
          <h1>Popular food near you </h1>

          <a>See All</a>
        </div>
        <div className="app__home-popular-food-post">
          <PopularFoodPost />
          <PopularFoodPost />
        </div>
      </div>
      <div className="app__home-popular-food-cards">
        <PopularFoodCard />
        <PopularFoodCard />
        <PopularFoodCard />
        <PopularFoodCard />
        <PopularFoodCard />
        <PopularFoodCard />
      </div>
      <div className="app__home-popular-restaurants">
        <div className="app__home-popular-restaurants-header app__home-posts-header">
          <h1>Restaurants near you </h1>

          <a>See All</a>
        </div>
        <div className="app__home-popular-restaurant-post">
          <PopularRestaurantPost />
          <PopularRestaurantPost />
        </div>
      </div>
    </div>
  );
}
