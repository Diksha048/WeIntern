import React from "react";
import "./App.css";
import Hero from "./Hero";
import CardGrid from "./CardGrid";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1 className="logo">Airbnb</h1>
        <nav className="nav">
          <a href="#stays">Stays</a>
          <a href="#experiences">Become a host</a>
          <a href="#online">Log in </a>
        </nav>
      </header>

      <Hero />

      <section className="category-section">
        <h2>Inspiration for your next trip</h2>
        <CardGrid />
      </section>

      <footer className="footer">© 2026 Airbnb Clone</footer>
    </div>
  );
}

export default App;
