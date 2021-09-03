//ReactJS

//PrimeReact
import { Card } from "primereact/card";

//Theme and styles
import "./Dishes.css";

//Resources

//Redux
import { useSelector, useDispatch } from "react-redux";

//actions
import { loadAllDishes } from "./allDishesSlice";
import { addToCart } from "./cartDishesSlice";

//selectors
import {selectAllDishes} from "./allDishesSlice"
import {dishesData} from "./Data"
import { addToFavorite } from "./favoriteDishesSlice";

export const Dish = () => {

  const dispatch = useDispatch()

  const selectAllDishes=state=>state.allDishes
  const selectSearchTerm=state=>state.searchTerm
    
  const selectFilteredAllRecipes = state => {
    const allDishes = selectAllDishes(state);
    const searchTerm=selectSearchTerm(state);

    return allDishes.filter(dish => dish.name.toLowerCase().includes(searchTerm.toLowerCase()))
  };

  const dishes=useSelector(selectFilteredAllRecipes);

  return (
    <>
          <div className="p-grid p-mt-4">
      {
        dishes.map(dish=>{
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
            <i class="fas fa-heart icons heart" onClick={()=>dispatch(addToFavorite(dish))}></i>
            <i class="fas fa-cart-plus icons cart" onClick={()=>dispatch(addToCart(dish))}></i>
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
          <img src={dish.img} width="100%"></img>
        </Card>
        </div>

        })
      }
      </div>
    </>
  );
};
