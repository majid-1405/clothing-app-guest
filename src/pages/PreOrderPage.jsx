import { useState } from "react";
import productData from "../data/product.json";
import { PreOrderAPI } from "../services/PreOrderAPI";

export default function PreOrderPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    notes: "",
  });
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const openModal = (product) => {
    setSelected(product);
    setIsOpen(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");

    try {
      // Kirim ke Supabase
      await PreOrderAPI.addPreOrder({
        name: formData.name,
        email: formData.email,
        date: formData.date,
        notes: formData.notes,
        product_name: selected?.name || "", // kirim nama produk juga
      });

      setFormData({ name: "", email: "", date: "", notes: "" });
      setIsOpen(false);
      setSuccess("Pesanan berhasil dikirim!");

      // Hilangkan pesan sukses otomatis
      setTimeout(() => setSuccess(""), 3000);
    } catch (err) {
      setError("Gagal menyimpan data: " + err.message);
    }
  };

  return (
    <div className="min-h-screen bg-white text-black relative">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-100 via-white to-gray-100 border-b-2 border-black py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
            Pre Order Collection
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Dapatkan produk eksklusif sebelum orang lain. Kualitas premium dengan layanan terdepan.
          </p>
        </div>
      </div>

      {/* Produk */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {productData.map((product) => (
            <div
              key={product.id}
              className="group bg-white text-black rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 border-2 border-gray-200"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-black">{product.name}</h3>
                <p className="text-xl font-semibold text-black mb-4">
                  {product.price.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </p>
                <button
                  onClick={() => openModal(product)}
                  className="w-full bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Pre Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white text-black rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl border-2 border-gray-200 relative">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Pre Order: {selected?.name}
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Masukkan nama lengkap"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-black focus:outline-none"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="nama@email.com"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-black focus:outline-none"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Tanggal Diinginkan
                </label>
                <input
                  type="date"
                  name="date"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-black focus:outline-none"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Catatan Tambahan
                </label>
                <textarea
                  name="notes"
                  placeholder="Catatan khusus untuk pesanan Anda..."
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-black focus:outline-none h-24 resize-none"
                  value={formData.notes}
                  onChange={handleChange}
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 bg-gray-200 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-300"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transform hover:scale-105 transition-all"
                >
                  Kirim Pesanan
                </button>
              </div>

              {error && (
                <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md border border-red-300">
                  ✗ {error}
                </div>
              )}
            </form>
          </div>
        </div>
      )}

      {/* Notifikasi sukses */}
      {success && (
        <div className="fixed bottom-6 right-6 bg-green-600 text-white px-4 py-3 rounded-lg shadow-lg z-50">
          {success}
        </div>
      )}
    </div>
  );
}
