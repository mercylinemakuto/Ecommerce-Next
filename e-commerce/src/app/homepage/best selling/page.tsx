import Image from "next/image";

const bestSellingProducts = [
  {
    id: 1,
    image: "/images/hoodie.png",
    title: "The north coat",
    price: 260,
    oldPrice: 360,
    rating: 65,
  },
  {
    id: 2,
    image: "/images/guccibag.jpeg",
    title: "Gucci duffle bag",
    price: 960,
    oldPrice: 1160,
    rating: 65,
  },
  {
    id: 3,
    image: "/images/proof.png",
    title: "RGB liquid CPU Cooler",
    price: 160,
    oldPrice: 170,
    rating: 65,
  },
  {
    id: 4,
    image: "/images/desk.png",
    title: "Small BookSelf",
    price: 360,
    oldPrice: 460,
    rating: 65,
  },
];

const BestSellingSection = () => (
  <section className="max-w-7xl mx-auto px-4 py-10">
    <div className="flex justify-between items-center mb-7">
      <div className="flex flex-col mb-8">
        <div className="flex items-center gap-4">
          <div className="w-5 h-10 bg-pink-600 rounded-sm"></div>
          <p className="text-pink-600 font-semibold text-sm mb-1">This Month</p>
        </div>
        <h2 className="text-2xl font-bold">Best Selling Products</h2>
      </div>

      <button className="bg-pink-600 text-white rounded px-4 py-2 hover:bg-pink-700 transition">
        View All
      </button>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
      {bestSellingProducts.map(({ id, image, title, price, oldPrice, rating }) => (
        <div key={id} className="relative bg-white rounded shadow p-3 group">
          <div className="absolute top-3 right-3 cursor-pointer opacity-70 group-hover:opacity-100 transition">
            ♡
          </div>
          <img src={image} alt={title} className="mx-auto h-32 object-contain mb-3" />
          <h3 className="font-semibold text-sm h-12">{title}</h3>
          <div className="flex items-center justify-between text-pink-600 font-semibold mt-1">
            <span>${price}</span>
            <span className="line-through text-gray-400 text-xs">${oldPrice}</span>
          </div>
          <div className="text-yellow-400 text-xs mt-1">
            {"★".repeat(5)} <span className="text-gray-500 ml-1">({rating})</span>
          </div>
        </div>
      ))}

      <div className="flex-1  relative flex justify-end   rounded items-center  bg-black mt-4 ml-50 h-[300px] w-[500px]">
        <Image
          src="/images/soundspeak.png"
          alt="Sound speaker"
          width={650}
          height={250}
          className=""
        />
      </div>
    </div>

  </section>
);

export default BestSellingSection;
