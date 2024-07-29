// components/Header.tsx
import React from 'react';
// import { BiSearch } from 'react-icons/bi';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-100 flex flex-col md:flex-row items-center justify-between p-6 relative">
      <div className="text-center md:text-left md:w-1/2">
        <h1 className="text-4xl font-bold">Let’s Create…your own salad!!!</h1>
        <p className="mt-2 text-lg text-gray-600">Fresh & tasty salads</p>
      </div>
      <div className="absolute md:static right-6 top-6 flex items-center w-full md:w-auto">
        {/* <BiSearch className="absolute ml-4 text-gray-500" /> */}
        <input
          type="text"
          placeholder="Search ingredients to make a salad..."
          className="pl-12 pr-4 py-2 w-full md:w-96 bg-white rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
        />
      </div>
      <div className="mt-6 md:mt-0 md:w-1/2 flex justify-end">
        <img
          src="/images/salad-header.png" // เปลี่ยนเป็น URL ของภาพที่คุณต้องการใช้
          alt="Salad Bowls"
          className="max-h-48 rounded-md"
        />
      </div>
    </header>
  );
};

export default Header;
