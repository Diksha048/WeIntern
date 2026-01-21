export default function Header() {
  return (
    <header className="header">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg"
        className="logo"
        alt="Airbnb"
      />

      <SearchBar />

      <div className="header-right">
        <span>Become a host</span>
        <div className="icon">🌐</div>
        <div className="profile">☰</div>
      </div>
    </header>
  );
}
