import React from 'react';

const products = [
  {
    id: 1,
    title: "Basic Oversized T-Shirt",
    image: "https://down-id.img.susercontent.com/file/id-11134207-7r98o-lzj5wyfeahuwf1",
    date: "9 Juni 2025",
    summary:
      "Kaos oversized berbahan katun premium, potongan simpel cocok untuk gaya minimalis sehari-hari.",
  },
  {
    id: 2,
    title: "Vintage Denim Jacket",
    image: "https://triplejeans.id/cdn/shop/files/33882802BWC_1.jpg?v=1688366197t",
    date: "5 Juni 2025",
    summary:
      "Jaket denim retro dengan aksen sobek ringan. Cocok untuk tampilan kasual maupun edgy.",
  },
];

export default function ArticlePage() {
  return (
    <div className="w-full px-10 py-50 space-y-10 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-6">Produk Fashion Terbaru</h1>
      
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

          {/* Gambar di kanan dalam card khusus */}
          <div className="flex-1 max-w-md p-4">
            <div className="h-[300px] w-full bg-gray-100 flex items-center justify-center overflow-hidden rounded-lg shadow">
              <img
                src={product.image}
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
