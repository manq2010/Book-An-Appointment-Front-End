import React from 'react';
import PropTypes from 'prop-types';

function ItemCard({ item }) {
  return (
    <div className="item-card">
      <img src={item.photo} alt={item.name} />
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>{item.price}</p>
    </div>
  );
}

ItemCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
};

export default ItemCard;
