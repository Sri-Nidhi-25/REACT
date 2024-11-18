export default function Header() {
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
