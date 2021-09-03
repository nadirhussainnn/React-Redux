const initialState=""


export const setSearchTerm=(searchTerm)=>{
    return{
        type:"SET_SEARCH_TERM",
        payload:{
            searchTerm:searchTerm
        }
    }
}

// export const clearSearchTerm=()=>{
//     return{
//         type:"CLEAR_SEARCH_TERM",
//     }
// }

export const searchTermReducer=(state=initialState, action)=>{
  
    switch(action.type){
      case "SET_SEARCH_TERM":{
          return action.payload.searchTerm
      }
      // case "CLEAR_SEARCH_TERM":{
      //   return ""
      // }
      default:{
        return state
      }
    }
  }

  export const selectSearchTerm=state=>state.searchTerm