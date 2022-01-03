import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import { useRef } from "react";

const AddItem = ({items, setItems}) => {

    const [newItem, setNewItem] = useState("");
    const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault(); // prevent page reload when submit
        if (!newItem) return;
        addNewItem(newItem);
        setNewItem("");
    }

    const addNewItem = (item) => {
        const id = items.length ? items[items.length-1].id + 1 : 1;
        const myNewItem = {id, checked: false, item};
        const newItems = [...items, myNewItem]
        setItems(newItems);
    }

    return (
        <form className='addForm' onSubmit={handleSubmit}>
            <label htmlFor="addItem">Add Item</label>
            <input
                autoFocus
                ref={inputRef}
                id='addItem'
                type='text'
                placeholder="Add Item"
                required
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            <button
                type="submit"
                aria-label="Add Item"
                onClick={() => inputRef.current.focus()} /* not work */
            >
                <FaPlus />
            </button>
        </form>
    )
}

export default AddItem
