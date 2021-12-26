import ItemList from "./ItemList";

const Content = ({items, setItems}) => {

    // use Tab to auto indentation
    return (
        <main>
            {items.length ? (
                <ItemList
                    items = {items}
                    setItems={setItems} 
                />
            ) : (
                <p style={{marginTop: '2rem'}}>Your list is empty.</p>
            )}
        </main>
    )
}


export default Content; // ';' this can be omitted here
