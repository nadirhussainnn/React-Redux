//ReactJS
 
import React from "react";
//PrimeReactcomps
import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import { Badge } from "primereact/badge";

//Resources
import Logo from "../Resources/Logo1.png";

//Redux
import {useSelector, useDispatch } from "react-redux";
import { setSearchTerm, selectSearchTerm } from "./searchTermSlice";
import { Link } from "react-router-dom";


export const MenubarComponent = () => {

  const items = [
    {
      label: "Restaurant Menu",
      icon: "fa fa-pizza-slice",
    },
    {
      label: "Top Deals",
      icon: "fab fa-ideal",
    },
    {
      label: "Our Restaurants",
      icon: "fas fa-street-view",
      items: [
        {
          label: "Karachi",
          icon: "pi pi-fw pi-user-plus",
        },
        {
          label: "Lahore",
          icon: "pi pi-fw pi-user-minus",
        },
        {
          label: "Quetta",
          icon: "pi pi-fw pi-users",
        },
        {
          label: "Sukkur",
          icon: "pi pi-fw pi-users",
        },
        {
          label: "Multan",
          icon: "pi pi-fw pi-users",
        },
      ],
    },
    {
      label: "More",
      icon: "pi pi-fw pi-calendar",
      items: [
        {
          label: "About Us",
          icon: "fas fa-address-card",
        },
        {
          label: "Terms and Service",
          icon: "fas fa-head-side-cough",
        },
        {
          label: "Be our Part",
          icon: "pi pi-fw pi-calendar-times",
        },
        {
          label: "Help & Support",
          icon: "fas fa-hands-helping",
        },
      ],
    },
    {
      label: "Buy Now",
      icon: "fas fa-smile",
      items: [
        {
          label: <span onClick={handleLogin}>Login</span>,
          icon: "fas fa-sign-in-alt",
        },
        {
          label: <span onClick={handleRegister}>Register</span>,
          icon: "fas fa-registered",
        },
      ],
    },
  ];
  
  const cartNumber=useSelector(state=>state.cartDishes.length)
  const favNumber=useSelector(state=>state.favoriteDishes.length)
  const searchTerm=useSelector(selectSearchTerm)

  
  const dispatch=useDispatch()
  function showFavoritePage(){}
  function showCartPage(){}

  function handleLogin(){

  }
  function handleRegister(){

  }

  const start = (
    <Link to="/">

    <img
      alt="logo"
      src={Logo}
      onError={(e) =>
        (e.target.src =
          "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
      }
      height="60"
      className="p-mr-2"
    ></img>
        </Link>

  );
  const end = (
    <div style={{ display: "flex" }}>
      <InputText placeholder="Search" value={searchTerm} type="text" onChange={(e)=>dispatch(setSearchTerm(e.target.value))}/>

      <div className="p-mt-1">
      <Link to="/fav">

      <i
          className="pi pi-heart p-text-secondary p-overlay-badge p-ml-4 p-mr-4"
          style={{ fontSize: "2rem", color:"red" }}
          onClick={showFavoritePage}
        >
          {
            favNumber>0?<Badge value={favNumber}></Badge>:<Badge value="0"></Badge>

          }
          
      </i>
          </Link>
          <Link to="/cart">
          
        <i
          className="pi pi-shopping-cart p-text-success p-overlay-badge p-mr-4"
          style={{ fontSize: "2rem", color:"yellowgreen" }}
          onClick={showCartPage}
        >
          {
            cartNumber>0?<Badge value={cartNumber}></Badge>:<Badge value="0"></Badge>
          }
      </i>
      </Link>

      </div>

        
    </div>
  );

  return (
    <div style={{position:"sticky", top:0, zIndex:1000}}>
      <div className="card">
        <Menubar model={items} start={start} end={end} className="p-shadow-3"/>
      </div>
    </div>
  );
};
