'use client';
import Image from 'next/image';
import { useState } from 'react';
import ProductList from '../components/productlist';

const Product1 = () => {
  const [quantity, setQuantity] = useState(1); // State to track quantity

  // Decrease quantity, but prevent it from going below 1
  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  // Increase quantity
  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <div>
    <div className="mt-14 flex flex-col md:flex-row bg-white h-screen">
      {/* Left Section: Image */}
      <div className="w-full md:w-1/2 flex items-center ml-6">
        <div className="relative h-[85%] w-full">
          <Image
            src="/productd1.png" // Replace with the path to your image
            alt="The Dandy Chair"
            layout="fill"
            objectFit="contain" // Adjust to contain instead of cover
            className="block"
          />
        </div>
      </div>

      {/* Right Section: Product Details */}
      <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
        <h1 className="text-3xl font-bold mb-4">The Dandy Chair</h1>
        <p className="text-xl font-semibold mb-6">£250</p>
        <div className="text-gray-700 mb-6">
          <p className="mb-4">
            A timeless design, with premium materials features as one of our most
            popular and iconic pieces. The dandy chair is perfect for any stylish
            living space with beech legs and lambskin leather upholstery.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Premium materials</li>
            <li>Handmade upholstery</li>
            <li>Quality timeless classic</li>
          </ul>
        </div>

        {/* Dimensions */}
        <div className="mb-6">
          <h3 className="font-bold text-gray-800 mb-2">Dimensions</h3>
          <div className="flex text-gray-600">
            <p className="mr-6">
              <span className="font-semibold">Height:</span> 110cm
            </p>
            <p className="mr-6">
              <span className="font-semibold">Width:</span> 75cm
            </p>
            <p>
              <span className="font-semibold">Depth:</span> 50cm
            </p>
          </div>
        </div>

        {/* Quantity and Add to Cart */}
        <div className="flex items-center space-x-4">
          {/* Quantity Controls */}
          <div className="flex items-center border border-gray-300 rounded">
            <button
              className="px-3 py-2 hover:bg-gray-200"
              onClick={handleDecrement}
              aria-label="Decrease quantity"
            >
              -
            </button>
            <input
              type="text"
              value={quantity} // Display current quantity
              className="w-10 text-center focus:outline-none"
              readOnly
            />
            <button
              className="px-3 py-2 hover:bg-gray-200"
              onClick={handleIncrement}
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
          <button className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700">
            Add to cart
          </button>
        </div>
      </div>
      
    </div>

    {/* Product List Section */}
    <div className="mt-12">
    <ProductList />
  </div>
</div>
   
  );
};

export default Product1;
