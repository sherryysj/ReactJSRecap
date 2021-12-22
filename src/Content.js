import { useState } from "react";

const Content = () => {

    // use state to change variable
    const [name, setName] = useState('Sherry');

    const handleNameChange = () => {
        const names = ['Sherry','Loves','Ivory'];
        const int = Math.floor(Math.random() * 3);
        setName(names[int]);
    }

    const [count, setCount] = useState(0);

    // state value will be remain the initial value when it be called in a function 
    const handleCount = () => {
        setCount(count + 1) // assume count is 1 when we call the function
        setCount(count + 1) // count still be initial count value when calling this function, value 1
        console.log(count) // count still be initial count when calling this function, value 1
    }
    // if count value is 1, then next time when this function is calling, count will be 2, not 3

    // call this after handleCount, it will show current count value
    const handleCount2 = () => {
        console.log(count)
    }

    // normal click
    const handleClick = () => {
        console.log('You clicked it')
    }

    // with parameter
    const handleClick2 = (name) => {
        // use ` when calling parameters
        console.log(`${name} was clicked`)
    }

    // calling event
    const handleClick3 = (e) => {
        console.log(e);
        console.log(e.target); // ';' can be omitted
        console.log(e.target.innerText)
    }
    

    return (
        <main>
            <p onDoubleClick={handleClick}> {/* double click not work in pad device*/}
                Hello, {name}!
            </p>
            <button onClick={handleNameChange}>Click to change name</button> {/* do not include () after handleClick */}
            <button onClick={handleCount}>Click to handle count</button> 
            <button onClick={handleCount2}>Click to show count</button> 
            <button onClick={() => handleClick2('Dave')}>Click handle with parameter</button>
            <button onClick={(e) => handleClick3(e)}>Click handle event</button>
        </main>
    )
}


export default Content; // ';' this can be omitted here
