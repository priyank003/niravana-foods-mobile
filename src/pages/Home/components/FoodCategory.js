import React from "react";
import breakfastIcon from "../../../assets/icons/breakfast 1.png";
import lunchIcon from "../../../assets/icons/lunch 1.png";
import snacksIcon from "../../../assets/icons/snacks 1.png";
import dinnerIcon from "../../../assets/icons/Dinner 1.png";
import desertIcon from "../../../assets/icons/Desert 1.png";

import "./FoodCategory.css";

const FOOD_CATEGORIES = [
  {
    name: "Breakfast",
    icon: breakfastIcon,
  },
  {
    name: "Lunch",
    icon: lunchIcon,
  },
  {
    name: "snacks",
    icon: snacksIcon,
  },
  {
    name: "Dinner",
    icon: dinnerIcon,
  },
  {
    name: "Desert",
    icon: desertIcon,
  },
];

export default function FoodCategory() {
  return (
    <div className="food__category-container">
      {FOOD_CATEGORIES.map((food) => {
        return (
          <div className="food__category-div">
            <div className="food__category-div-icon flex-center">
              <img src={food.icon} alt="breakfast" />
            </div>
            <p>{food.name}</p>
          </div>
        );
      })}
    </div>
  );
}
