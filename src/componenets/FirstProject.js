import "../style.css";

export default function FirstProject() {
  return (
    <div>
      <header>
        <nav className="flex-container">
          <div className="contain">
            <img src="./logo192.png" alt="React" className="logo-img"></img>
            <h1>React Facts!</h1>
          </div>
          <div>
            <b className="nav-text">React Course - Project 1 </b>
          </div>
        </nav>
      </header>
      <main className="body-P1">
        <h1> Fun facts about React</h1>
        <ul>
          <li>Was released in 2013</li>
          <li>was created by Jordan Walke</li>
          <li>Has over 100k stars in Github</li>
          <li>Is maintained by Facebook</li>
        </ul>
      </main>
    </div>
  );
}
