import LineItem from "./LineItem";

const ItemList = ({items, setItems}) => {

    return (
        <ul>
            {items.map((item) => (
                <LineItem 
                    key = {item.id}
                    item = {item}
                    items = {items}
                    setItems = {setItems}
                />
            ))}
        </ul>
    )

}

export default ItemList;