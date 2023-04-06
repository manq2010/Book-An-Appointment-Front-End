import React, { useState, useEffect } from 'react';
import ItemCard from './ItemCard';

function Main() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:3000/api/v1/items')
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div>
      <h1>List of Items</h1>
      <div className="card-container">
        {items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Main;
