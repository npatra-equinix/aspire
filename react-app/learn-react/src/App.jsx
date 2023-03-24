//import logo from './logo.svg';
//import './App.css';
import {useState} from 'react';


const products = [
 {title:'Cabbage', id:1},
 {title:'Garlic', id:2},
 {title:'Apple', id:3},
];
 function Product(){
const listItems = products.map((product) =>
  <li key = {product.id}>
    {product.title}
  </li>

);


 return(<ul>{listItems}</ul>);
}
 export default function ShowButtons(){
   return (
   <div>
    <MyButton />
    <MyButton />
   </div>
   );
}
function MyButton(){
  let [count,setCount] = useState(0);
   function countInc(){
    console.log(typeof(setCount(count+1)));
    // count+=1;
    
    console.log(count);
   }
return(
  <button onClick = {countInc}> clicked {count} times</button>
  
);
}



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
