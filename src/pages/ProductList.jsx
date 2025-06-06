import { Link } from "react-router-dom";
import productData from "../data/product.json";

export default function ProductList() {
  return (
    <div className="bg-gray-100">
      <div className="w-full mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {productData.map((product) => (
            <Link
              key={product.id}
              to={`/ProductList/${product.id}`}
              className="group relative block"
            >
              <div className="w-full rounded-md overflow-hidden bg-white shadow hover:shadow-lg transition duration-300">
                <img
                  src={product.image}
                  alt={product.name}
                  className="aspect-square w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                  <p className="text-sm text-gray-500">Stock: {product.stock}</p>
                  <p className="text-sm font-semibold text-gray-900 mt-1">
                    {product.price}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {product.tag.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-200 text-gray-700 px-2 py-0.5 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
