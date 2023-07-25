// import logo from './logo.svg';
import './App.css';

//now import the Header from  componets folder to here

import  Header from './components/Header';
import Counter from './components/Counter';
import Greeting from './components/Greeting'; // Import the Greeting component

const isLoggedIn = true; // Replace this with your actual login state

function App() {
  return (
    // <div className="App">
    //   {/* <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header> */}
     
    // </div>


    <div>
    <Header/>
    <p><Counter/></p>
    
  <div><Greeting isLoggedIn={isLoggedIn} /></div>


    </div>
    
  );

}



export default App;
