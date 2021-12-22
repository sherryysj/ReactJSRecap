/* import logo from './logo.svg'; */
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {

  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  )


  /*
  //const name = "render me";

  const handleNameChange = () => {

     const names = ['Sherry','Loves','Ivory'];
     const int = Math.floor(Math.random() * 3);
     return names[int];

  }

  // command by press shift+alt+a 
  // return jsx - javascript in xml
  return (
    
    // use className instead of class in react
    // jsx renders javascript expression as text
    // but cannot render object and boolean to the page
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, {handleNameChange()}!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
       
        <p>{"render javascript expression as text"} {name}</p> 
      </header>
    </div>
  );
  */
}


export default App;
