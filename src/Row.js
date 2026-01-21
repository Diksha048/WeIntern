import React from "react";

export default function Row({ title, items }) {
  return (
    <section className="row">
      <h2>{title} ›</h2>
      <div className="row-cards">
        {items.map((item, index) => (
          <div key={index} className="card">
            <div className="badge">Guest favourite</div>
            <div className="heart">♡</div>

            <img src={item.img} alt={item.title} loading="lazy" />

            <p className="card-title">{item.title}</p>
            <p className="card-info">
              ₹{item.price} for 2 nights · ★ {item.rating}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
