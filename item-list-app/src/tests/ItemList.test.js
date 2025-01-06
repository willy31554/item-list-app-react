// src/tests/ItemList.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import ItemList from "../components/ItemList";

describe("ItemList", () => {
  // Test case for valid number of items
  test("renders the correct number of items", () => {
    const items = ["Item 1", "Item 2", "Item 3"]; // Sample array of items

    // Render the ItemList component with the items array passed as props
    render(<ItemList items={items} />);

    // Select all list items (<li>) rendered in the DOM
    const listItems = screen.getAllByRole("listitem");

    // Assert that the number of list items is equal to the length of the items array
    expect(listItems.length).toBe(items.length);
  });

  // Test case for empty items array
  test("renders no items when the array is empty", () => {
    const items = []; // Empty array

    // Render the ItemList component with the empty items array
    render(<ItemList items={items} />);

    // Select all list items (<li>) rendered in the DOM
    const listItems = screen.queryAllByRole("listitem");

    // Assert that no list items are rendered
    expect(listItems.length).toBe(0);
  });

  // Test case for rendering with one item
  test("renders one item when the array has one element", () => {
    const items = ["Single Item"]; // Single item in the array

    // Render the ItemList component with the single item
    render(<ItemList items={items} />);

    // Select all list items (<li>) rendered in the DOM
    const listItems = screen.getAllByRole("listitem");

    // Assert that one list item is rendered
    expect(listItems.length).toBe(1);
  });
});
