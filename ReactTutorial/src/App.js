/* import logo from './logo.svg'; */
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState, useEffect} from 'react';


function App() {
  const API_URL = 'http://localhost:3500/items';

  // set defualt empty array if local story array is null
  const [items, setItems] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  // function running when dependency updates
  // runining after everything rendered 
  useEffect(() => {

    //async makes a function return a Promise 
    //await makes a function wait for a Promise
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error('Did not receive expected data');
        const listItems = await response.json();
        setItems(listItems);
        setFetchError(null);
      } catch (err){
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    setTimeout(() => {
      (async () => await fetchItems())();
    }, 2000)

  },[])

  return (
    <div className="App">
      <Header title = "Games"/>
      <Content 
        items = {items}
        setItems = {setItems}
        fetchError = {fetchError}
        isLoading = {isLoading}
        setFetchError = {setFetchError}
        API_URL = {API_URL}
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
