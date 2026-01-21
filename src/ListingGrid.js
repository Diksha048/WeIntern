import React from "react";

const data = [
  {
    id: 1,
    title: "Beach House",
    price: "$120 / night",
    img: "https://source.unsplash.com/400x300/?beach,house"
  },
  {
    id: 2,
    title: "Mountain Cabin",
    price: "$90 / night",
    img: "https://source.unsplash.com/400x300/?cabin,mountain"
  },
  {
    id: 3,
    title: "City Apartment",
    price: "$150 / night",
    img: "https://source.unsplash.com/400x300/?apartment,city"
  }
];

export default function ListingGrid() {
  return (
    <div className="grid">
      {data.map((item) => (
        <div key={item.id} className="card">
          <img
            src={item.img}
            alt={item.title}
            loading="lazy"
          />
          <h3>{item.title}</h3>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
}
