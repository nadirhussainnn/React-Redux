import {dishesData} from "./Mock"

const initialState= dishesData

export const loadAllDishes=()=>{
    return{
        type:"SHOW_ALL_DISHES",
        payload:dishesData
    }
}

export const loadSearchedDishes=(name)=>{
  return{
      type:"SHOW_SEARCHED_DISHES",
      payload:{
        name:name
      }
  }
}

export const allDishesReducer=(allDishes=initialState, action)=>{
  
    switch(action.type){
      case "SHOW_ALL_DISHES":{
        return action.payload
      }
      case "SHOW_SEARCHED_DISHES":{
       return allDishes.filter(dish=>dish.name==action.payload.name) 
      }
      default:{
        return allDishes
      }
    }
  }

export const selectAllDishes=state=>state.allDishes;
