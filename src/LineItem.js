import { FaTrashAlt } from 'react-icons/fa';

const LineItem = ({item, items, setItems}) => {

    const handleCheck = (id) => {
        // change item using map
        const listItems = items.map((item) => item.id === id ? 
        {...item, checked: !item.checked} : item);
        setItems(listItems);
    }

    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id);
        setItems(listItems);
    }

    return (
        <li className="item">
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