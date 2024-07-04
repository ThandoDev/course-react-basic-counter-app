import {React, useState, useEffect} from 'react';
import './App.css';



const App = () => {
// state
  const [count, setCount] = useState(0);

  const incrementClick = () => {
    console.log('incrementClick');
    setCount(count + 1);
  };
  
  const decrementClick = () => {
    console.log('decrementClick');
    setCount(count - 1);
  };

  return (
    <div >
      {count > 0 ?
       <h1>Counter is {count}</h1> : <h1>Counter is Zero</h1> }

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
