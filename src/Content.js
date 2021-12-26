import { FaTrashAlt } from 'react-icons/fa'

const Content = ({items, setItems}) => {

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

    // use Tab to auto indentation
    return (
        <main>
            {items.length ? (
            <ul>
                {items.map((item) => (
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
                        />
                    </li>
                ))}
            </ul>
            ) : (
                <p style={{marginTop: '2rem'}}>Your list is empty.</p>
            )}
        </main>
    )
}


export default Content; // ';' this can be omitted here
