
import Link from "next/link";
import Image from "next/image";

// Define a list of products with individual details
const products = [
  {
    id: 1,
    name: "Glass Table",
    price: 29.99,
    image: "/table1.jpg",
  },
  {
    id: 2,
    name: "Round Table",
    price: 24.99,
    image: "/table2.jpg",
  },
  {
    id: 3,
    name: "Munich Table",
    price: 19.99,
    image: "/table3.jpg",
  },
  {
    id: 4,
    name: "Wooden Table",
    price: 34.99,
    image: "/table4.jpg",
  },
  {
    id: 5,
    name: "Solid Wood Tea Table",
    price: 34.99,
    image: "/table5.jpg",
  },
  {
    id: 6,
    name: "Gloss Coffea Table",
    price: 34.99,
    image: "/table6.jpeg",
  },
  {
    id: 7,
    name: "Multifunctional Lift Top Center Table",
    price: 34.99,
    image: "/table7.jpg",
  },
  {
    id: 8,
    name: "Round Coffee Gold Glass Table",
    price: 34.99,
    image: "/table8.jpeg",
  },
  // Add more products as needed
];

export default function Tables() {
  return (
    <div className="min-h-screen p-4">
      {/* Hero Section with Half-Height Image */}
<div className="relative w-full h-[50vh] sm:h-[40vh] md:h-[50vh] bg-gray-200">
  <Image
    src="/productbg.jpg"
    alt="plantpots"
    className="object-cover"
    layout="fill" // Ensures the image fills the container
    priority // Improves loading performance for the hero image
  />
  <h1 className="absolute bottom-4 left-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
    Tables
  </h1>
</div>




{/* Carousel Section */}
<div className="my-8 mb-14">
  <div className="flex justify-center items-center space-x-6 overflow-x-auto scrollbar-hide">
    {[
      { name: "Plant Pots", path: "/plant-pots" },
      { name: "Ceramics", path: "/ceramics" },
      { name: "Tables", path: "/tables" },
      { name: "Chairs", path: "/chairs" },
      { name: "Crockery", path: "/crockery" },
      { name: "Tableware", path: "/tableware" },
      { name: "Cutlery", path: "/cutlery" },
    ].map((item, index) => (
      <Link key={index} href={item.path}>
        <span className="px-4 py-2 text-lg font-medium bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 cursor-pointer">
          {item.name}
        </span>
      </Link>
    ))}
  </div>
</div>


      {/* Product Grid Section */}
      <div className="mb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="mt-14 bg-white shadow-md rounded-lg overflow-hidden flex flex-col"
          >
            {/* Product Image */}
            <div className="w-full h-[300px] relative">
              <Image
                src={product.image}
                alt={product.name}
                className="object-cover"
                layout="fill" // Ensures the image fills the container
              />
            </div>
            {/* Product Details */}
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h2>
              <p className="text-gray-600">${product.price.toFixed(2)}</p>
              {/* Add to Cart Button */}
              <button className="mt-4 w-full bg-blue-500 text-white py-5 rounded-full hover:bg-blue-600 text-sm font-medium">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
