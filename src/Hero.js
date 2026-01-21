import React from "react";

export default function Hero() {
  return (
    <div className="hero">
      <h2>Find your next stay</h2>
      <div className="search-bar">
        <input type="text" placeholder="Where" />
        <input type="date" placeholder="Check-in" />
        <input type="date" placeholder="Check-out" />
        <input type="number" placeholder="Guests" min="1" />
        <button>Search</button>
      </div>
    </div>
  );
}
