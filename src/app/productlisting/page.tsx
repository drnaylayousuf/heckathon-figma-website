import Image from 'next/image'; // Make sure to import Image if using Next.js

import Link from 'next/link'; // Import Link from Next.js


export default function Productlisting() {
    return (
        <div className="relative">
<div className="relative w-full h-[300px]"> {/* Reduced height of 300px */}
    <Image
        src="/productlisting.png"
        alt="Product image"
        fill
        className="object-cover"
    />
    <h1 className="absolute inset-0 flex items-center lg:items-end justify-center lg:justify-start text-white text-3xl pl-20 pb-8 font-semibold p-4 bg-opacity-50 bg-black/40">
        All Products
    </h1>
</div>



            <div className="mt-9 p-4">
                {/* <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                        <select className="w-32 px-4 py-2 ">
                            <option value="">Category</option>
                            <option value="category1">Category 1</option>
                            <option value="category2">Category 2</option>
                        </select>
                        <select className="w-32 px-4 py-2 ">
                            <option value="">Product type</option>
                            <option value="type1">Type 1</option>
                            <option value="type2">Type 2</option>
                        </select>
                        <select className="w-32 px-4 py-2 ">
                            <option value="">Price</option>
                            <option value="price1">Price 1</option>
                            <option value="price2">Price 2</option>
                        </select>
                        <select className="w-32 px-4 py-2 ">
                            <option value="">Brand</option>
                            <option value="brand1">Brand 1</option>
                            <option value="brand2">Brand 2</option>
                        </select>
                    </div>
                    <div className="flex items-center space-x-4 ml-auto">
                        <h2 className="text-xl font-semibold">Started By:</h2>
                        <select className="w-32 px-4 py-2 ">
                            <option value="">Date added</option>
                            <option value="date1">Date 1</option>
                            <option value="date2">Date 2</option>
                        </select>
                    </div>
                </div> */}


{/* First list product line */}
<div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 px-2">
   <div className="bg-gray-100 rounded-lg mx-auto">
    <Link href="/product1">
        <Image
            src="/pl1.png"
            alt="The Dandy chair"
            width={350} // Keep the width the same
            height={300} // Increase the height slightly
            className="rounded-lg object-cover" // Ensures proper scaling
        />
    </Link>
    <div className="p-2">
        <h3 className="text-lg font-bold">The Dandy chair</h3>
        <p className="text-gray-500">£250</p>
    </div>
</div>

    <div className="bg-gray-100 rounded-lg mx-auto">
        <Link href="/product/2">
            <Image src="/pl2.png" alt="Rustic Vase Set" width={350} height={300} className="rounded-lg" />
        </Link>
        <div className="p-2">
            <h3 className="text-lg font-bold">Rustic Vase Set</h3>
            <p className="text-gray-500">£165</p>
        </div>
    </div>
    <div className="bg-gray-100 rounded-lg mx-auto">
        <Link href="/product/3">
            <Image src="/pl3.png" alt="The Silky Vase" width={350} height={300} className="rounded-lg" />
        </Link>
        <div className="p-2">
            <h3 className="text-lg font-bold">The Silky Vase</h3>
            <p className="text-gray-500">£125</p>
        </div>
    </div>
    <div className="bg-gray-100 rounded-lg mx-auto">
        <Link href="/product/4">
            <Image src="/pl4.png" alt="The Lucy Lamp" width={350} height={300} className="rounded-lg" />
        </Link>
        <div className="p-2">
            <h3 className="text-lg font-bold">The Lucy Lamp</h3>
            <p className="text-gray-500">£399</p>
        </div>
    </div>
</div>

{/* Second list product line */}
<div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 px-2">
    <div className="bg-gray-100 rounded-lg mx-auto">
        <Link href="/product/5">
            <Image src="/pl5.png" alt="The Dandy chair" width={350} height={300} className="rounded-lg" />
        </Link>
        <div className="p-2">
            <h3 className="text-lg font-bold">The Dandy chair</h3>
            <p className="text-gray-500">£250</p>
        </div>
    </div>
    <div className="bg-gray-100 rounded-lg mx-auto">
        <Link href="/product/6">
            <Image src="/pl6.png" alt="Rustic Vase Set" width={350} height={300} className="rounded-lg" />
        </Link>
        <div className="p-2">
            <h3 className="text-lg font-bold">Rustic Vase Set</h3>
            <p className="text-gray-500">£165</p>
        </div>
    </div>
    <div className="bg-gray-100 rounded-lg mx-auto">
        <Link href="/product/7">
            <Image src="/pl7.png" alt="The Silky Vase" width={350} height={300} className="rounded-lg" />
        </Link>
        <div className="p-2">
            <h3 className="text-lg font-bold">The Silky Vase</h3>
            <p className="text-gray-500">£125</p>
        </div>
    </div>
    <div className="bg-gray-100 rounded-lg mx-auto">
        <Link href="/product/8">
            <Image src="/pl8.png" alt="The Lucy Lamp" width={350} height={300} className="rounded-lg" />
        </Link>
        <div className="p-2">
            <h3 className="text-lg font-bold">The Lucy Lamp</h3>
            <p className="text-gray-500">£399</p>
        </div>
    </div>
</div>

{/* Third list product line */}
<div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 px-2">
    <div className="bg-gray-100 rounded-lg mx-auto">
        <Link href="/product/1">
            <Image src="/pl1.png" alt="Round Chair" width={350} height={300} className="rounded-lg" />
        </Link>
        <div className="p-2">
            <h3 className="text-lg font-bold">Round Chair</h3>
            <p className="text-gray-500">£250</p>
        </div>
    </div>
    <div className="bg-gray-100 rounded-lg mx-auto">
        <Link href="/product/2">
            <Image src="/pl2.png" alt="Ceramic Vase Set" width={350} height={300} className="rounded-lg" />
        </Link>
        <div className="p-2">
            <h3 className="text-lg font-bold">Rustic Vase Set</h3>
            <p className="text-gray-500">£165</p>
        </div>
    </div>
    <div className="bg-gray-100 rounded-lg mx-auto">
        <Link href="/product/3">
            <Image src="/pl3.png" alt="The Silky Vase" width={350} height={300} className="rounded-lg" />
        </Link>
        <div className="p-2">
            <h3 className="text-lg font-bold">The Silky Vase</h3>
            <p className="text-gray-500">£125</p>
        </div>
    </div>
    <div className="bg-gray-100 rounded-lg mx-auto">
        <Link href="/product/4">
            <Image src="/pl4.png" alt="The Lucy Lamp" width={350} height={300} className="rounded-lg" />
        </Link>
        <div className="p-2">
            <h3 className="text-lg font-bold">The Lucy Lamp</h3>
            <p className="text-gray-500">£399</p>
        </div>
    </div>
</div>



{/* View Collection Button */}
<div className="mt-16 flex justify-center mb-6">
    <button className="bg-blue-500 text-white py-5 px-7 rounded-lg hover:bg-blue-600 transition duration-300">
        View Collection
    </button>
</div>


            </div>
        </div>
    );
}
