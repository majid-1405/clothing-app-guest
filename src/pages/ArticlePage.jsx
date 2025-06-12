import { useEffect, useState } from 'react';
import { ArticlePageAPI } from "../services/ArticlePageAPI";
import ArticleList from '../components/Articlelist';

export default function ArticlePage() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    title: '',
    img: '',
    date: '',
    summary: ''
  });

  const fetchProducts = async () => {
    try {
      const data = await ArticlePageAPI.fetchNotes();
      setProducts(data.sort((a, b) => new Date(b.date) - new Date(a.date)));
    } catch (error) {
      console.error("Gagal mengambil data:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await ArticlePageAPI.createArticlePage(form);
      setForm({ title: '', img: '', date: '', summary: '' });
      fetchProducts();
    } catch (error) {
      console.error("Gagal menambahkan produk:", error);
    }
  };

  return (
    <div className="w-full px-4 py-10 space-y-10 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-6">Produk Fashion Terbaru</h1>

      {/* Form Tambah Produk */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md space-y-4 max-w-2xl mx-auto"
      >
        <h2 className="text-xl font-semibold">Tambah Produk Baru</h2>
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Judul Produk"
          className="w-full border rounded p-2"
          required
        />
        <input
          name="img"
          value={form.img}
          onChange={handleChange}
          placeholder="URL Gambar"
          className="w-full border rounded p-2"
          required
        />
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="w-full border rounded p-2"
          required
        />
        <textarea
          name="summary"
          value={form.summary}
          onChange={handleChange}
          placeholder="Deskripsi singkat"
          className="w-full border rounded p-2"
          required
        />
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition"
        >
          Tambah Produk
        </button>
      </form>

      {/* Daftar Produk dari Komponen */}
      <ArticleList products={products} />
    </div>
  );
}
