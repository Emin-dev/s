import { useState } from "react";  // useState hook
 
function App() {  // component

  const [d, sets] = useState(2);
// d  variable
  return (
    <div className="app">
      <h1> {d} </h1>
      <button onClick={()=> sets((p)=> p + p)}> Add </button>
    </div>
  );
} // component end


export default App;
