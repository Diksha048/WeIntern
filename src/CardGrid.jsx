import React from "react";

const categories = [
  { title: "Beach", img: "https://tse3.mm.bing.net/th/id/OIP.IdcrjqFS6_YBtrF6VCtbUgHaE7" },
  { title: "Mountain", img: "https://hips.hearstapps.com/hmg-prod/images/alpe-di-siusi-sunrise-with-sassolungo-or-langkofel-royalty-free-image-1623254127.jpg" },
  { title: "City", img: "https://tse2.mm.bing.net/th/id/OIP.Xt-7y9CrMZKYJaNU3e1Y2wHaE8" },
  { title: "Countryside", img: "https://images.pexels.com/photos/67211/field-away-summer-sky-67211.jpeg" },
  { title: "Snow", img: "https://wallpaperaccess.com/full/2534206.jpg" },
  { title: "Desert", img: "https://cdn.pixabay.com/photo/2022/02/04/03/04/desert-6991820_1280.jpg" }
];

export default function CardGrid() {
  return (
    <div className="grid">
      {categories.map((cat, i) => (
        <div key={i} className="card">
          <img src={cat.img} alt={cat.title} loading="lazy" />
          <h3>{cat.title}</h3>
        </div>
      ))}
    </div>
  );
}
