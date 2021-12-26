import LineItem from "./LineItem";

const ItemList = ({items, searchItems, setItems}) => {

    return (
        <ul>
            {searchItems.map((item) => (
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