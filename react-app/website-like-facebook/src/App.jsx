import HeaderFacebook from './components/common/header/header.jsx';
import FooterFacebook from './components/common/footer/footer.jsx';
import LeftSidebar from './components/container/leftSidebar/leftSidebar.jsx';
import MainContent from './components/container/MainContent/MainContent.jsx';
import RightSidebar from './components/container/rightSidebar/rightSidebar.jsx';
import DataLeftSidebar from './components/container/leftSidebar/dataLeftSidebar.jsx';


export default function App(){

   return (
    <>
        
             <HeaderFacebook />    
             
        <div class='container'>
             <LeftSidebar dataLeftSidebar={DataLeftSidebar()}/>
             <MainContent />
             <RightSidebar />
          
         </div>
             <FooterFacebook />
        
     </>
    );
}

// import logo from './logo.svg';
// import './App.css';

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
