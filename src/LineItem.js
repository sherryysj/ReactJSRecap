import { FaTrashAlt } from 'react-icons/fa';

const LineItem = ({item, items, setItems}) => {

    const handleCheck = (id) => {
        // change item using map
        const listItems = items.map((item) => item.id === id ? 
        {...item, checked: !item.checked} : item);
        setItems(listItems);

        // save the changed listItems in JSON file
        localStorage.setItem('gamelist', JSON.stringify(listItems));
    }

    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id);
        setItems(listItems);
        localStorage.setItem('gamelist', JSON.stringify(listItems));
    }

    return (
        <li className="item" key={item.id}>
            <input
                type="checkbox"
                onChange={() => handleCheck(item.id)}
                checked={item.checked}
            />

            <label
                style={(item.checked) ? {textDecoration:'line-through'} : null}
                onDoubleClick={() => handleCheck(item.id)}
            >{item.item}</label>

            <FaTrashAlt 
                onClick={() => handleDelete(item.id)}
                role="button" 
                tabIndex="0" 
                aria-label={`Delete ${item.item}`} /* invisiable label for an element */
            />
        </li>
    )
}

export default LineItem;