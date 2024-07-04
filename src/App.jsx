
import './App.css';



const App() {
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
