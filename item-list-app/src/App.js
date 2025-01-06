// src/App.js
import React from "react";
import "./styles.css";
import ItemList from "./components/ItemList";

function App() {
  const items = ["Apple", "Banana", "Orange"]; // Sample items for the ItemList component

  return (
    <div className="App">
      <h1>Item List</h1>
      <ItemList items={items} />
    </div>
  );
}

export default App;
