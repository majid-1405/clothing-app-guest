import { AiOutlinePlus } from "react-icons/ai";
import HeroSection from "../components/HeroSection";
import productData from "../data/product.json";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <InspirationalQuote />
      <CategoryPreviews />

      <ProductList />
      
    </div>
  );
}
function InspirationalQuote() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.allorigins.win/get?url=https://zenquotes.io/api/random")
      .then((res) => {
        const result = JSON.parse(res.data.contents);
        setQuote(result[0].q);
        setAuthor(result[0].a);
      })
      .catch((err) => {
        setError("Gagal memuat quote inspiratif.");
      });
  }, []);

  return (
    <div className="bg-white py-6 px-4 sm:px-6 lg:px-8 shadow-sm text-center">
      <h2 className="text-xl font-semibold text-indigo-600 mb-2">
        Inspirational Quote
      </h2>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <>
          <p className="italic text-gray-700">"{quote}"</p>
          <p className="mt-2 text-sm text-gray-500">— {author}</p>
        </>
      )}
    </div>
  );
}

function CategoryPreviews() {
  const callouts = [
    {
      name: "Clothes",
      description: "T-Shirt Basic",
      imageSrc:
        "https://down-id.img.susercontent.com/file/id-11134207-7r98o-lzj5wyfeahuwf1",
      imageAlt:
        "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
      href: "#",
    },
    {
      name: "Clothes and Outer",
      description: "Windbreaker Jacket",
      imageSrc:
        "https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/464024/item/goods_09_464024_3x4.jpg?width=600",
      imageAlt:
        "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
      href: "#",
    },
    {
      name: "Accessories",
      description: "Belt",
      imageSrc:
        "https://www.aignermunich.co.id/media/catalog/product/cache/d7ed22e8ffd4d1896e1cce971f9faefc/t/m/tm24070015101-1.jpg",
      imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
      href: "#",
    },
  ];
  return (
    <div className="bg-gray-100">
      <div className="w-full  sm:px-6 lg:px-8">
        <div className="max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900 font-gothic text-left">
            Collections
          </h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative font-gothic">
                <img
                  alt={callout.imageAlt}
                  src={callout.imageSrc}
                  className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
                />
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">
                  {callout.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductCard({ image, name, price }) {
  return (
    <div className="flex flex-col h-full">
      <div className="relative w-full h-72">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-md"
        />
        <button className="absolute top-2 right-2 bg-white rounded-full p-1 shadow hover:scale-110 transition">
          <AiOutlinePlus />
        </button>
      </div>
      <div className="mt-2 text-sm font-medium text-slate-800 text-center">
        {name}
      </div>
      <div className="text-sm text-slate-500 text-center">Rp {price}</div>
    </div>
  );
}

function ProductList() {
  return (
    <div className="flex justify-center px-4 py-8 bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-7xl">
        {productData.slice(0, 10).map((product) => (
          <Link
            key={product.id}
            to={`/QuickReview/${product.id}`}
            className="group"
          >
            <ProductCard {...product} />
          </Link>
        ))}
      </div>
    </div>
  );
}
