
import {allDishesReducer} from "./components/allDishesSlice"
import {favoriteDishesReducer} from "./components/favoriteDishesSlice"
import {cartDishesReducer} from "./components/cartDishesSlice"
import {searchTermReducer} from "./components/searchTermSlice"

import { combineReducers, createStore } from "redux"


const reducers={
  allDishes: allDishesReducer,
  favoriteDishes: favoriteDishesReducer,
  cartDishes: cartDishesReducer,
  searchTerm: searchTermReducer 
}

const rootReducer=combineReducers(reducers)
export const store=createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
