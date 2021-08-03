import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [state, setState] = useState(initialState)

  useEffect(() => {
    console.log("this is what´s been added from web"
  }, [])

  return (
<div style={{background: 'red'}}>
  A simple primary alert—check it!
</div>



  );
}

export default App;
