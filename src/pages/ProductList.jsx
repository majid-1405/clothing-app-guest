import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Product } from "../services/Product";
import Loading from "../components/Loading";
import Error from "../components/Error";

export default function ProductList() {
  const [product, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError("");

      try {
        const result = await Product.fetch(); // ambil data dari Supabase
        setProductData(result);
      } catch (err) {
        console.error(err);
        setError("Gagal mengambil data produk.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Customers Also Purchased
          </h2>
          <p className="mt-2 text-gray-500">
            Temukan produk menarik lainnya yang disukai pelanggan lain
          </p>
        </div>

        {/* Loading & Error */}
        {loading && <Loading />}
        {error && <Error message={error} />}

        {/* Produk */}
        {!loading && !error && product.length === 0 && (
          <p className="text-center text-gray-500">Belum ada produk.</p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {product.map((product) => (
            <Link
              key={product.id}
              to={`/ProductList/${product.id}`}
              className="group block bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="overflow-hidden rounded-t-xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700 truncate">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Stok: <span className="font-medium">{product.stock}</span>
                </p>
                <p className="text-base font-bold text-gray-800 mt-2">
                  {Number(product.price).toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {(product.tag?.split(",") ?? []).slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 border border-gray-300 text-gray-700 px-2 py-1 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {(product.tag?.split(",").length ?? 0) > 3 && (
                    <span className="bg-gray-200 text-gray-600 px-2 py-1 text-xs rounded-full">
                      +{product.tag.split(",").length - 3}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
