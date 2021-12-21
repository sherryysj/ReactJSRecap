import logo from './logo.svg';
import './App.css';

function App() {
  //const name = "render me";

  // return jsx - javascript in xml
  return (
    
    // use className instead of class in react
    // jsx renders javascript expression as text
    // but cannot render object and boolean to the page
    <div className="App">
      <header className="App-header">
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
        {/* commany by press shift+alt+a */}
        {/* <p>{"render javascript expression as text"} {name}</p> */}
      </header>
    </div>
  );
}

export default App;
