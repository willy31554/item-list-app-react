// src/components/ItemList.jsx
import React from "react";

// ItemList Component: Renders a list of items passed as props
const ItemList = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default ItemList;
