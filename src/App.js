import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [state, setState] = useState(initialState)

  useEffect(() => {
    
  }, [])

  return (
<div style={{background: 'red'}}>
  A simple primary alert—check it!
</div>



  );
}

export default App;
