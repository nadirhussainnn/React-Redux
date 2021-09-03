//ReactJS
import { useState } from "react";
//PrimeReact
import { Card } from "primereact/card";

//Theme and styles
import "./Dishes.css";

//Resources

//Redux
import { useSelector, useDispatch } from "react-redux";

//actions
import { removeFromCart } from "./cartDishesSlice";

//selectors

export const CartDishes = () => {


    const selectAllCarted=state=>state.cartDishes
    const selectSearchTerm=state=>state.searchTerm

    const FilterdAllCart=state=>{
        const allCart=selectAllCarted(state)
        const searchTerm=selectSearchTerm(state)

        return allCart.filter(dish=>dish.name.toLowerCase().includes(searchTerm.toLowerCase()))        
    }

    const allCarted=useSelector(FilterdAllCart)
    const dispatch=useDispatch()
    const selectBill=state=>{
        const dishes=selectAllCarted(state)
        let sum=0;
        dishes.map(dish=>{
            sum+=parseFloat(dish.price.substring(1,dish.price.lenght))
        })
        return sum.toFixed(2)
    }
    const bill=useSelector(selectBill)

  return (
    <>
    
        <div className="p-shadow-4 p-p-4">
        <h3>
            Total Bill: {bill} 
        </h3>
        </div>

    <div className="p-grid p-mt-4">    

      {
        allCarted.map(dish=>{
          return <div className="p-xs-12 p-sm-12 p-md-6 p-lg-4 p-xl-3">

            <Card footer={
            <div
            className="p-p-1"
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>
              <strong>Quantity: {dish.qty}</strong>
            </span>
            <i class="fas fa-trash icons cart" onClick={()=>dispatch(removeFromCart(dish.id))}></i>
          </div>

          } header={
            <div
            className="p-p-1"
            style={{
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "#14213d",
            }}
          >
            <h3 className="headintText">{dish.name}</h3>
            <h3 className="headintText price-heading">{dish.price}</h3>
          </div>
          } className="dishCard">
          <img src={dish.img}></img>
        </Card>
        </div>

        })
      }
      </div>
    </>
  );
};