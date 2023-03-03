import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [cnt,setCnt]=useState(0);

  useEffect(()=>{
    console.log(cnt);
    console.log("useff");
  },[cnt])

  let c=0;
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1>{cnt}</h1>
      <button onClick={()=>{
      //  console.log(c);
       return setCnt((prev)=>prev+1)
      }
      }>add</button>
    </div>
  );
}

export default App;
