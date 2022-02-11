import LineItem from "./LineItem";

const ItemList = ({items, searchItems, setItems, setFetchError, API_URL}) => {

    return (
        <ul>
            {searchItems.map((item) => (
                <LineItem 
                    key = {item.id}
                    item = {item}
                    items = {items}
                    setItems = {setItems}
                    setFetchError = {setFetchError}
                    API_URL = {API_URL}
                />
            ))}
        </ul>
    )

}

export default ItemList;