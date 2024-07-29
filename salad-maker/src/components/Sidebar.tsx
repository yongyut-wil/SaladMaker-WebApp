// components/Sidebar.tsx
import React from 'react';
// import { BiLeaf } from 'react-icons/bi';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 h-full bg-white shadow-md fixed">
      <div className="p-4 text-2xl font-bold font-sans tracking-wide text-gray-700">
      {/* <div className="p-4 text-xl font-bold font-sans font-weight 700 font-size-30px"> */}
        {/* <BiLeaf className="inline-block mr-2" /> */}
        SALADMAKER
      </div>
      <nav className="mt-4">
        <ul>
          <li className="p-4 hover:bg-gray-100 cursor-pointer">
            <span role="img" aria-label="salad maker">
              🥗
            </span>
            <span className="ml-2">Salad Maker</span>
          </li>
          <li className="p-4 hover:bg-gray-100 cursor-pointer">
            <span role="img" aria-label="recipe">
              📃
            </span>
            <span className="ml-2">Recipe</span>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
