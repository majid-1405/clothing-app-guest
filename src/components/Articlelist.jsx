// components/ArticleList.jsx
export default function ArticleList({ products = [], onEdit, onDelete, loading }) {
  if (loading) return <p className="text-center text-gray-500">Memuat data...</p>;
  if (!products || products.length === 0) return <p className="text-center text-gray-500">Belum ada produk.</p>;

  return (
    <div className="space-y-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-md overflow-hidden"
        >
          <div className="flex-1 p-6 text-center md:text-left">
            <p className="text-sm text-gray-500 mb-1">{product.date}</p>
            <h2 className="text-2xl font-semibold text-black">{product.title}</h2>
            <p className="mt-2 text-gray-700">{product.summary}</p>

           
          </div>

          <div className="flex-1 max-w-md p-4">
            <div className="h-[300px] w-full bg-gray-100 flex items-center justify-center overflow-hidden rounded-lg shadow">
              <img
                src={product.img}
                alt={product.title}
                className="h-full object-contain"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
