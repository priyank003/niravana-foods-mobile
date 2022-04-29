import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Order from "./pages/Order/Order";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [value, setValue] = React.useState(0);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="order" element={<Order />} />
      </Routes>

      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <Link to="/">
            <BottomNavigationAction
              label="Discover"
              icon={<RestaurantIcon fontSize="small" />}
              value=""
              onClick={() => {
                this.handleRouteChange("/");
              }}
            />
          </Link>
          <Link to="/">
            <BottomNavigationAction
              label="Explore"
              icon={<LocationOnIcon fontSize="small" />}
            />
          </Link>
          <Link to="/">
            <BottomNavigationAction
              label="Following"
              icon={<FavoriteBorderIcon fontSize="small" />}
            />
          </Link>
          <Link to="/order">
            <BottomNavigationAction
              label="Search"
              icon={<SearchIcon fontSize="small" />}
            />
          </Link>
          <Link to="/order">
            <BottomNavigationAction
              label="Cart"
              icon={<ShoppingBagIcon fontSize="small" />}
            />
          </Link>
        </BottomNavigation>
      </Paper>
    </div>
  );
}

export default App;
