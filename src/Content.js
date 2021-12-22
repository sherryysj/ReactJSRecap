const Content = () => {

    const handleNameChange = () => {

        const names = ['Sherry','Loves','Ivory'];
        const int = Math.floor(Math.random() * 3);
        return names[int];
   
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
                Hello, {handleNameChange()}!
            </p>
            <button onClick={handleClick}>Click it</button> {/* do not include () after handleClick */}
            <button onClick={() => handleClick2('Dave')}>Click handle with parameter</button>
            <button onClick={(e) => handleClick3(e)}>Click handle event</button>
        </main>
    )
}


export default Content; // ';' this can be omitted here
