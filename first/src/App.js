// import logo from './logo.svg';
import './App.css';

//now import the Header from  componets folder to here

import  Header from './components/Header';
import Counter from './components/Counter';
import Greeting from './components/Greeting'; // Import the Greeting component
import Button from './components/Button';
import LoginForm from './components/LoginForm';

import TodoList from './components/TodoList'
import TaskList from './components/TaskList'


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
            <Button/>
            <Header/>
            <p><Counter/></p>
            <div><Greeting isLoggedIn={isLoggedIn} /></div>
            <Button/>

            <LoginForm/>
            <TaskList/>
            <TodoList/>

          
      </div>
    
  );

}



export default App;
