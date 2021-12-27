import AddItem from "./AddItem";
import ItemList from "./ItemList";
import SearchItem from "./SearchItem";
import { useState } from "react";
import ColorInput from "./ColorInput";
import ShowBox from "./ShowBox";

const Content = ({items, setItems}) => {

    const [search, setSearch] = useState("")
    const [color, setColor] = useState("")

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
            {items.length ? (
                <ItemList
                    items = {items}
                    searchItems = {items.filter(item=>((item.item).toLowerCase()).includes(search.toLowerCase()))}
                    setItems={setItems} 
                />
            ) : (
                <p style={{marginTop: '2rem'}}>Your list is empty.</p>
            )}

            <ShowBox
                color={color}
            />
            <ColorInput 
                color = {color}
                setColor = {setColor}
            />
        </main>
    )
}


export default Content; // ';' this can be omitted here
