import React from "react";
import "./style.css";

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

function Header() {
  return (
    <header>
      <nav className="flex-container">
        <img src="./logo192.png" alt="react" className="logo-img" />
        <div>
          <ul className="nav-items">
            <div>Pricing</div>
            <div>About</div>
            <div>Contact</div>
          </ul>
        </div>
      </nav>
    </header>
  );
}
function Footer() {
  const CurrentYear = new Date().getFullYear();
  return (
    <footer className="foot">
      {" "}
      © {CurrentYear} My app development. All rights reserved.{" "}
    </footer>
  );
}

function MainContent() {
  return (
    <div className="main">
      <h1>Reasons I'm excited to learn React</h1>
      <ol>
        <li>
          It's a popular library, so I'll be able to fit in with the cool kids!
        </li>
        <li>I'm more likely to get a job as a developer if I know React</li>
      </ol>
    </div>
  );
}

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
