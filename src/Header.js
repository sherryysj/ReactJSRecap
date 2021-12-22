/* ctrl + alt + R to call snippet */
/*  and use _rafce command to create a generic react arrow function component */

const Header = () => {

    // write style as variable
    const headerStyle = {
        backgroundColor: 'royalblue',
        color: '#fff'
    };

    return (
        // refer inline style from variable
        <header style={headerStyle}>
            <h1>Welcome</h1>
        </header>
    )
}

export default Header;
