// import React, {useReducer} from "react";


//  function All() {
//    const [state, dispatch] = useReducer(reducer, initialState)

//    const increaseCount = () => {
//     dispatch({type: ACTION.INCREASE})
//    }
//    const decreaseCount = () => {
//     dispatch({type: ACTION.DECREASE})
//    }
//   return (
//     <div>
//         <button onClick={increaseCount}>Increase</button>
//         <button onClick={decreaseCount  }>Decrease</button>
//     </div>
//   )
// }

// export default All

// //dispatch is for updating state 
// const ACTION =  { 
//     INCREASE: 'increase',
//     DECREASE: 'decrease'
// }
// const initialState = {count: 0}

// const reducer = (state, action) =>{
//     switch (action.type){
//         case ACTION.INCREASE:
//             return {count: state.count + 1}
//         case ACTION.DECREASE:
//             return {count: state.count - 1}
//         default: 
//             return state;
//     }
// }