import React from 'react';

const categories = [
  'Food',
  'Transport',
  'Utilities',
  'Rent',
  'Entertainment',
  'Healthcare',
  'Other'
];

const CategorySelector = ({ selectedCategory, onSelectCategory }) => {
  return (
    <div>
      <h2>Select Expense Category</h2>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <button onClick={() => onSelectCategory(category)}>{category}</button>
          </li>
        ))}
      </ul>
      <p>Selected Category: {selectedCategory}</p>
    </div>
  );
};

export default CategorySelector;