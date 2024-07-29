// components/Header.tsx
import React from 'react';
import Image from 'next/image';
import { BiSearch } from 'react-icons/bi';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-100 relative p-6">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/salad-header-background.png" // เส้นทางของภาพพื้นหลัง
          alt="Salad Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-50"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col md:w-1/2">
          <h1 className="text-4xl font-bold text-gray-900">Let’s Create…your own salad!!!</h1>
          <div className="bg-yellow-400 mt-4 p-4 rounded-md">
            <p className="text-lg font-semibold text-gray-900">Fresh & tasty salads</p>
            <p className="text-sm text-gray-700">Relax please, we’ve got you covered every day of the week</p>
          </div>
        </div>
        <div className="flex md:w-1/2 justify-end mt-6 md:mt-0">
          <Image
            src="/images/salad-header.png" // เส้นทางของภาพที่คุณต้องการใช้
            alt="Salad Bowls"
            width={300}
            height={200}
            className="rounded-md"
          />
        </div>
      </div>
      <div className="relative z-10 mt-6">
        <div className="flex justify-end">
          <div className="flex items-center w-full md:w-96 bg-white rounded-full shadow-md">
            <BiSearch className="ml-4 text-gray-500" size={24} />
            <input
              type="text"
              placeholder="Search ingredients to make a salad..."
              className="flex-grow pl-4 pr-4 py-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-yellow-300 rounded-full"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
