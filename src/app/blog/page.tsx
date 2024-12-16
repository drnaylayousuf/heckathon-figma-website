import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  return (
    <div className="bg-gray-50 min-h-screen w-full py-12 px-4 md:px-16">
      {/* Blog Header */}
      <h1 className="text-3xl md:text-5xl font-bold text-[#2A254B] text-center mb-8">
        Our Latest Blog Posts
      </h1>
      <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
        Discover our insights, tips, and the latest updates in the world of home
        decor, design, and living. Stay inspired with our curated blog posts.
      </p>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "Transform Your Living Room with Minimalist Design",
            description:
              "Minimalism in design can elevate your living space. Learn the key principles to achieving simplicity and beauty.",
            image: "/blog1.jpg", // Replace with actual image path
            link: "/blog/transform-living-room", // Link to the unique blog page
          },
          {
            title: "Top 10 Ceramic Vases for 2024",
            description:
              "Discover our top picks for timeless and trendy ceramic vases to enhance your home decor.",
            image: "/blog2.jpg", // Replace with actual image path
            link: "/blog/top-ceramic-vases", // Link to the unique blog page
          },
          {
            title: "How to Mix Textures in Your Home",
            description:
              "Learn how to combine different textures for a warm, inviting, and stylish home look.",
            image: "/blog3.jpg", // Replace with actual image path
            link: "/blog/mix-textures", // Link to the unique blog page
          },
        ].map((post, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 relative"
          >
            {/* Blog Image with Overlay */}
            <div className="relative w-full h-72 group">
              <Image
                src={post.image}
                alt={post.title}
                layout="fill"
                objectFit="cover"
                className="brightness-60 group-hover:brightness-100 transition-all duration-300 ease-in-out transform group-hover:scale-105"
              />
              {/* Overlay Text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-black text-2xl font-bold text-center px-4">
                  {post.title}
                </h2>
              </div>
            </div>

            {/* Blog Content */}
            <div className="p-6">
              <p className="text-gray-600 text-sm mb-4">{post.description}</p>
              <Link
                href={post.link} // Link to the unique blog page
                className="inline-block text-[#2A254B] hover:underline font-medium"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
