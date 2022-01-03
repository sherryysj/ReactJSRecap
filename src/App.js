/* import logo from './logo.svg'; */
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState, useEffect} from 'react';

function App() {

  // set defualt empty array if local story array is null
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('gamelist')) || []);
  
  console.log('before updating items');

  // function running when dependency updates
  // runining after everything rendered 
  useEffect(() => {
    localStorage.setItem('gamelist', JSON.stringify(items));
  },[items])

  // this will run before useEffect
  console.log('after updating items');

  return (
    <div className="App">
      <Header title = "Games"/>
      <Content 
        items = {items}
        setItems = {setItems}
      />
      <Footer itemLength={items.length}/>
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
