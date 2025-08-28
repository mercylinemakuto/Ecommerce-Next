'use client';

import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import Image from "next/image";
import Button from "../../sharedcomponents/Button";

const products = [
  {
    id: 1,
    name: "Breed Dry Dog Food",
    price: "$100",
    rating: 4,
    reviews: 33,
    image: "/images/dogfood.png",
    discount: null,
  },
  {
    id: 2,
    name: "CANON EOS DSLR Camera",
    price: "$360",
    rating: 5,
    reviews: 95,
    image: "/images/camera.jpeg",
    discount: null,
  },
  {
    id: 3,
    name: "ASUS FHD Gaming Laptop",
    price: "$700",
    rating: 5,
    reviews: 223,
    image: "/images/laptop.png",
    discount: null,
  },
  {
    id: 4,
    name: "Curology Product Set",
    price: "$500",
    rating: 4,
    reviews: 145,
    image: "/images/products.jpg",
    discount: null,
  },
  {
    id: 5,
    name: "Kids Electric Car",
    price: "$960",
    rating: 5,
    reviews: 65,
    image: "/images/car.jpg",
    discount: "New",
  },
  {
    id: 6,
    name: "Jr. Zoom Soccer Cleats",
    price: "$116",
    rating: 5,
    reviews: 35,
    image: "/images/football-shoes.jpg",
    discount: "New",
  },
  {
    id: 7,
    name: "GP11 Shooter USB Gamepad",
    price: "$660",
    rating: 5,
    reviews: 55,
    image: "/images/gamepad.png",
    discount: "New",
  },
  {
    id: 8,
    name: "Quilted Satin Jacket",
    price: "$660",
    rating: 5,
    reviews: 95,
    image: "/images/jacket.png",
    discount: null,
  },
];

const ExploreProducts = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 py-12">
      <div className="flex flex-col mb-8">
        <div className="flex items-center gap-4">
          <div className="w-5 h-10 bg-pink-600 rounded-sm"></div>
          <span className="text-pink-600 font-semibold">Our Products</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold mt-4">Explore Our Products</h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-lg transition relative"
          >
            <button className="absolute top-3 right-3 bg-white p-1 rounded-full shadow hover:bg-gray-100 transition">
              <FaHeart size={16} className="text-gray-500" />
            </button>
            <Image
              src={product.image}
              alt={product.name}
              width={256}
              height={144}
              className="mb-4"
              objectFit="contain"
              priority={false}
            />
            <h3 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2">
              {product.name}
            </h3>
            <p className="text-red-500 font-semibold text-sm">{product.price}</p>
            <div className="flex items-center mt-1 gap-1">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  size={14}
                  className={i < product.rating ? "text-yellow-400" : "text-gray-300"}
                />
              ))}
              <span className="ml-2 text-gray-500 text-xs">({product.reviews})</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Button text="View All Products" onClick={() => alert("Show all products")} />
      </div>
    </section>
  );
};

export default ExploreProducts;
