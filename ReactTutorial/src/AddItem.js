import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import { useRef } from "react";
import apiRequest from './apiRequest';

const AddItem = ({items, setItems, setFetchError, API_URL}) => {

    const [newItem, setNewItem] = useState("");
    const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault(); // prevent page reload when submit
        if (!newItem) return;
        addNewItem(newItem);
        setNewItem("");
    }

    const addNewItem = async (item) => {
        const id = items.length ? items[items.length-1].id + 1 : 1;
        const newItem = {id, checked: false, item};
        const newItems = [...items, newItem]
        setItems(newItems);

        // add new data to API
        const postOptions = {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(newItem)
        }

        const result = await apiRequest(API_URL, postOptions);
        if (result) setFetchError(result);

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
