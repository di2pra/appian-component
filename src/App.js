import React, {useState} from 'react';
import './App.css';

function App() {


  const [count, setCount] = useState(0);

  /*useEffect(() => {
    window["Appian"].Component.saveValue("countVal", count);
  });*/



  window["Appian"].Component.onNewValue(function(newValues) {

    var AppianVal = newValues.countVal;

    console.log("OnNewValueExecuted : countVal =" + AppianVal + " et count ="+ count );

    if(AppianVal !== count) {
      setCount(AppianVal);
    }


  });

  const Increment = () => {

    setCount(count+1);

    window["Appian"].Component.saveValue("countVal", count+1);
    
  }

  const Decrement = () => {
    
    setCount(count-1);

    window["Appian"].Component.saveValue("countVal", count-1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
    </div>
  );
}

export default App;
