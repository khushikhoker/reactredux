import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import {incNumber, decNumber} from "./actions/index";

 const App =()=>{
   const myState = useSelector((state) =>state.changeTheNumber );
   const dispatch = useDispatch();
   return(
     <>
     <div classNmae="container">
      <h1>Increment/Decrement counter</h1>
      <h4>using React and Redux</h4>
      <div class="quantity">
      <h1>
      <a title="Decrement"><span><button onClick={()=> dispatch(decNumber()) }>-</button>   </span></a>
      <input name='quantity' type="text" value={myState}/>
      <a title="Increment"><span><button onClick={()=> dispatch(incNumber())}>+</button></span></a>
      </h1>
   
      </div>
     </div>
     </>
   )
 }

 export default App;