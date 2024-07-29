import Image from "next/image";
import React from "react";
import { FiPlusCircle } from 'react-icons/fi'; 
interface IngredientCardProps {
  image: string | null;
  ingredient: string;
  calories: number;
}

const IngredientCard: React.FC<IngredientCardProps> = ({
  image,
  ingredient,
  calories,
}) => {
  return (
    // <div className="bg-white rounded-lg shadow p-4">
    //   <Image
    //     src={
    //       (image && `https://unsplash.com/s/photos/${ingredient}`) ||
    //       "https://via.placeholder.com/250"
    //     }
    //     alt="Landscape picture"
    //     width={300}
    //     height={300}
    //   />
    //   <div className="mt-2 flex justify-between items-center">
    //     <span>{ingredient}</span>
    //     <span className="text-orange-500 font-bold">{calories} Cal</span>
    //   </div>
    //   <button className="mt-2 w-full bg-yellow-400 rounded-full py-1 text-white font-bold">
    //     +
    //   </button>
    // </div>

    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
      <div className="relative w-full h-40">
        <Image src={image && `https://unsplash.com/s/photos/${ingredient}` || "https://via.placeholder.com/250"} alt={ingredient} layout="fill" objectFit="cover" />
      </div>
      <div className="p-4 flex flex-col justify-between">
        <h3 className="text-lg font-semibold text-gray-900">{ingredient}</h3>
        <div className="flex items-center justify-between mt-2">
          <span className="text-xl font-bold text-black">{calories} <span className="text-yellow-500">Cal</span></span>
         
        </div>
        <button className="flex justify-end text-yellow-500 hover:text-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-300 rounded-full py-2">
            <FiPlusCircle size={24} />
          </button>
      </div>
    </div>
  );
};

export default IngredientCard;
