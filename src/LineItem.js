import { FaTrashAlt } from 'react-icons/fa';
import apiRequest from './apiRequest';

const LineItem = ({item, items, setItems, setFetchError, API_URL}) => {

    const handleCheck = async (id) => {
        // change item using map
        const listItems = items.map((item) => item.id === id ? 
        {...item, checked: !item.checked} : item);
        setItems(listItems);

        // update API data
        const checkItem = listItems.filter((item) => item.id === id);
        const updateOptions = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({checked:checkItem[0].checked})
        };

        const reqUrl = `${API_URL}/${id}`;
        const result = await apiRequest(reqUrl, updateOptions);

        if (result) setFetchError(result);

    }

    const handleDelete = async (id) => {
        const listItems = items.filter((item) => item.id !== id);
        setItems(listItems);

        // delete data from API
        const deleteOptions = { method: 'DELETE'};
        const reqUrl = `${API_URL}/${id}`;
        const result = await apiRequest(reqUrl, deleteOptions);
        if (result) setFetchError(result);
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