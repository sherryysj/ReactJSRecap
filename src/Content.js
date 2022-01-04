import AddItem from "./AddItem";
import ItemList from "./ItemList";
import SearchItem from "./SearchItem";
import { useState } from "react";

const Content = ({items, setItems, fetchError, isLoading}) => {

    const [search, setSearch] = useState("")

    // use Tab to auto indentation
    return (
        <main>
            <AddItem 
                items = {items}
                setItems={setItems} 
            />
            <SearchItem 
                search = {search}
                setSearch = {setSearch}
            />
            {isLoading && <p>Loading Items...</p>}
            {fetchError && <p style={{color:"red"}}>{`Error: ${fetchError}`}</p>}
            {!fetchError && !isLoading &&
                (items.length ? (
                    <ItemList
                        items = {items}
                        searchItems = {items.filter(item=>((item.item).toLowerCase()).includes(search.toLowerCase()))}
                        setItems={setItems} 
                    />
                ) : (
                    <p style={{marginTop: '2rem'}}>Your list is empty.</p>
                ))
            }
        </main>
    )
}


export default Content; // ';' this can be omitted here
