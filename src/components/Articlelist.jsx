export default function ArticleList({ products }) {
  return (
    <>
       {products.map((product) => (
        <div
          key={product.id}
          className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-md overflow-hidden"
        >
          {/* Konten kiri */}
          <div className="flex-1 p-6 text-center md:text-left">
            <p className="text-sm text-gray-500 mb-1">{product.date}</p>
            <h2 className="text-2xl font-semibold text-black">{product.title}</h2>
            <p className="mt-2 text-gray-700">{product.summary}</p>
            <button className="mt-4 bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition">
              Lihat Detail
            </button>
          </div>

          {/* Gambar */}
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
    </>
  );
}
