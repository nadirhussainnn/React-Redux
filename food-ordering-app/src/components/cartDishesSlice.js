
const initialState=[]

export const addToCart=(itemDetails)=>{
  return{
      type:"ADD_TO_CART",
      payload:itemDetails,
    }
  }

export const removeFromCart=(id)=>{
    return{
      type:"REMOVE_FROM_CART",
      payload:{
        id: id,
      }
    }
  }

  export const clearCart=()=>{
    return{
      type:"CLEAR_CART",
    }
}

export const getBill=()=>{
  return{
    type:"GET_BILL",
  }
}

export const cartDishesReducer=(state=initialState, action)=>{
  
    switch(action.type){
      case "ADD_TO_CART":{
        return [...state, action.payload]
      }
      case "REMOVE_FROM_CART":{
        return state.filter(dish=>dish.id!=action.payload.id)
      }
      case "CLEAR_CART":{
        return []
    }
    case "GET_BILL":{
      return state.reduce((current, prev)=>{
        return parseInt(current.price)+parseInt(prev.price)
      })
    }

    default:{
        return state
      }
    }
}