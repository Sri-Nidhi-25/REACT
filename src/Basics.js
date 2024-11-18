import React from "react";
import "./style.css";
import Header from "./componenets/basics folder/Header";
import Footer from "./componenets/basics folder/Footer";
import MainContent from "./componenets/basics folder/MainContent";

// function Navbar() {
//   return (
//     <nav>
//       <h1>Bob's Bistro</h1>
//       <ul>
//         <li>Menu</li>
//         <li>About</li>
//         <li>Contact</li>
//       </ul>
//     </nav>
//   );
// }

//ReactDOM.render(navbar, document.getElementById("root"))

// instead below

//ReactDOM.createRoot(document.getElementById("root")).render(navbar)

// a short form  fro the long form below

// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(navbar)

// export default Navbar;

/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */
// function Temp() {
//   return (
//     <div>
//       <img src="./logo192.png" alt="react" />
//       <h1>Title</h1>
//       <ol>
//         <li>love it</li>
//         <li>need it</li>
//       </ol>
//     </div>
//   );
// }

function Temp() {
  return (
    <div className="container">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default Temp;
