import Image from "next/image";
import React from "react";

const ShoeCard = ({ name, price, discounted }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <Image
        className="w-full"
        src="https://i.imgur.com/gS9DHPu.jpeg"
        alt={name}
        width={400}
        height={200}
      />
      <div className="p-4">
        <h3 className="text-gray-900 font-bold text-xl mb-2">{name}</h3>
        <div className="flex items-center">
          <p
            className={`text-lg font-bold ${
              discounted ? "line-through text-gray-500" : "text-indigo-500"
            }`}
          >
            ${price}
          </p>
          {discounted && (
            <p className="text-lg font-bold text-red-500 ml-2">(Discounted)</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoeCard;
