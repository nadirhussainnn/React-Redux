const initialState=[]


export const addToFavorite=(itemDetails)=>{
    return{
      type:"ADD_TO_FAVORITE",
      payload:itemDetails,
    }
  }

  export const removeFromFavorite=(id)=>{
    return{
      type:"REMOVE_FROM_FAVORITE",
      payload:{
        id: id,
      }
    }
}

export const clearFavorite=()=>{
    return{
      type:"CLEAR_FAVORITE",
    }
}


export const favoriteDishesReducer=(state=initialState, action)=>{
  
    switch(action.type){
      case "ADD_TO_FAVORITE":
        return [...state, action.payload]
     
        case "REMOVE_FROM_FAVORITE":{
            return state.filter(dish=>dish.id!==action.payload.id)
        }
    case "CLEAR_FAVORITE":{
        return []
    }
      default:{
        return state
      }
    }
  }