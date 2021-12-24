import { useState } from "react";

const Content = () => {

    // set an object array in initial state 
    const [items, setItems] = useState([
        {
            id: 1,
            checked: true,
            item: "Oxygen Not Include"
        },
        {
            id: 2,
            checked: false,
            item: "Red Dead Redemption 2"
        },
        {
            id: 3,
            checked: false,
            item: "Resident Evil 2"
        },
        {
            id: 4,
            checked: false,
            item: "Crusader Kings 3"
        },
        {
            id: 5,
            checked: false,
            item: "Stellaris"
        }
    ]);

    // use Tab to auto indentation
    return (
        <main>
            <ul>
                {items.map((item) => (
                    <li className="item" key={item.id}>
                        <input
                            type="checkbox"
                            checked={item.checked}
                        />
                        <label>{item.item}</label>
                        <button>Delete</button>
                    </li>
                ))}
            </ul>
        </main>
    )
}


export default Content; // ';' this can be omitted here
