function Navbar(){
    return (
    <nav>
        <h1>Bob's Bistro</h1>
        <ul>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav> )
}


// ReactDOM.render(navbar, document.getElementById("root"))

// instead below

// ReactDOM.createRoot(document.getElementById("root")).render(navbar)

// a short form  fro the long form below

// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(navbar)


export default Navbar;