import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow">
      <div className="text-xl font-bold">SALADMAKER</div>
      <input
        type="text"
        placeholder="Search ingredients to make a salad..."
        className="border rounded px-3 py-2"
      />
    </nav>
  );
};

export default Navbar;
