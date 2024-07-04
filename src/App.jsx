import {React, useState} from 'react';
import './App.css';



const App = () => {
// state
  const [count, setCount] = useState(0);

  const incrementClick = () => {
    console.log('clicked');
    setCount(count + 1);
  };
  
  const decrementClick = () => {
    console.log('clicked');
    setCount(count - 1);
  };

  return (
    <div >
       <h1>
          Counter is Zero
        </h1>
        <button onClick={incrementClick}>
          Increment
        </button>
        <button onClick={decrementClick} >  
          Decrement
        </button>
            </div>
  );
}

export default App;
