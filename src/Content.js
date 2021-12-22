const Content = () => {

    const handleNameChange = () => {

        const names = ['Sherry','Loves','Ivory'];
        const int = Math.floor(Math.random() * 3);
        return names[int];
   
    }

    return (
        <main>
            <p>
                Hello, {handleNameChange()}!
            </p>
        </main>
    )
}


export default Content; // ';' this can be omitted here
