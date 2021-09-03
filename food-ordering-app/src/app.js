//ReactJS
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//PrimeReactCSS
import "primereact/resources/themes/fluent-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

//Styles and theme
import "./app.css";

//Custom components
import { MenubarComponent } from "./components/Menubar";
import { Dish } from "./components/Dishes";
import {FavoriteDishes} from "./components/FavoriteDishes"
import {CartDishes} from "./components/CartDishes"
export default function App() {
  return (
    <Router>
      <Switch>
      <div>
      <MenubarComponent />      
        
        <Route exact path="/">
        <Dish />  
        </Route>

        <Route exact path="/fav">
        <FavoriteDishes />  
        </Route>

        <Route exact path="/cart">
        <CartDishes />  
        </Route>

        </div>

      </Switch>
    </Router>
  );
}

//import { useMediaQuery } from "react-responsive";

// const isMobile = useMediaQuery({
//   query: '(min-width: 576px)'
// })

// const isTables = useMediaQuery({
//   query: '(min-width: 768px)'
// })

// const isLaptopOrDesktop = useMediaQuery({
//   query: '(max-width: 992px)'
// })

// const isLargeScreen = useMediaQuery({
//   query: '(max-width: 1200px)'
// })
