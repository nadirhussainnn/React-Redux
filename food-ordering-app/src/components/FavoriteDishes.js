//ReactJS

//PrimeReact
import { Card } from "primereact/card";

//Theme and styles
import "./Dishes.css";

//Resources

//Redux
import { useSelector, useDispatch } from "react-redux";

//actions
import { removeFromFavorite } from "./favoriteDishesSlice";

//selectors

export const FavoriteDishes = () => {

    const selectAllFav=state=>state.favoriteDishes
    const selectDearchTerm=state=>state.searchTerm

    const favoriteFilteredAll=state=>{
        const allFav=selectAllFav(state)
        const searchTerm=selectDearchTerm(state)

        return allFav.filter(dish=>dish.name.toLowerCase().includes(searchTerm.toLowerCase()))

        
    }
    const allFavDishes=useSelector(favoriteFilteredAll)
    const dispatch=useDispatch()
    
  return (
    <>
          <div className="p-grid p-mt-4">
      {
        allFavDishes.map(dish=>{
            console.log(dish)
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
            <i class="fas fa-trash icons cart" onClick={()=>dispatch(removeFromFavorite(dish.id))}></i>
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