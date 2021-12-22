/* ctrl + alt + R to call snippet */
/*  and use _rafce command to create a generic react arrow function component */

const Header = () => {

    return (
        // use style directly, double {} needed, the inside one refers to the style
        <header style={{
            backgroundColor: 'mediumblue',
            color: '#fff'
        }}>
            <h1>Welcome</h1>
        </header>
    )
}

export default Header
