
import {useDispatch, useSelector} from "react-redux"
import * as Actions from "./actions"

export default function App(){

    
    const dispatch=useDispatch()

    function handleIncrement(){
        dispatch(Actions.increase_number())
    }
    function handleDecrement(){
        dispatch(Actions.decrease_number())
    }
    
    const number=useSelector((state)=>state.number_reducer.number)

       
    return(
        <div>
            <div>
            <h1>{number}</h1>
            </div>
            <div style={{padding:"5px"}}>
                <button onClick={handleIncrement}>Increment</button>
                <button onClick={handleDecrement}>Decrement</button>
            </div>
        </div>
    )
}