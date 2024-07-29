import React from "react";

interface Category {
  name: string;
  icon: string;
}

const categories: Category[] = [
  { name: "Vegetables", icon: "🥬" },
  { name: "Fruits", icon: "🍎" },
  { name: "Toppings", icon: "🥑" },
  { name: "Protein", icon: "🍗" },
  { name: "Dressing", icon: "🥫" },
];

const CategorySelector: React.FC = () => {
  return (
    <div className="flex space-x-4 overflow-x-auto p-4">
      {categories.map((category) => (
        <div
          key={category.name}
          className="flex flex-col items-center bg-white rounded-lg p-4 shadow min-w-28"
        >
          <span className="text-2xl">{category.icon}</span>
          <span className="mt-2">{category.name}</span>
        </div>
      ))}
    </div>
  );
};

export default CategorySelector;
