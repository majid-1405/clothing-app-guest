import { useEffect, useState } from "react";
import { ArticleAPI } from "../services/ArticleAPI";
import Loading from "../components/Loading";
import Error from "../components/Error";
import EmptyState from "../components/EmptyState";
import AlertBox from "../components/AlertBox";
import ArticleList from "../components/ArticleList"; // Pastikan komponen ini ada

export default function ArticlePage() {
  const [article, setArticle] = useState([]);
  const [form, setForm] = useState({
    title: "",
    img: "",
    date: "",
    summary: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const fetchArticle = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await ArticleAPI.fetchArticles();
      setArticle(data);
    } catch (err) {
      setError("Gagal mengambil data artikel");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticle();
  }, []);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      if (isEditing && editingId) {
        await ArticleAPI.updateArticle(editingId, form);
        setSuccess("Artikel berhasil diperbarui");
      } else {
        await ArticleAPI.addArticle(form);
        setSuccess("Artikel berhasil ditambahkan");
      }

      // Reset form dan status
      setForm({ title: "", img: "", date: "", summary: "" });
      setIsEditing(false);
      setEditingId(null);

      setTimeout(() => setSuccess(""), 3000);

      fetchArticle();
    } catch (err) {
      setError(`Terjadi kesalahan: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full px-4  space-y-10 bg-gray-100 min-h-screen py-20">
      <h1 className="text-4xl font-bold text-center mb-6">
        Produk Fashion Terbaru
      </h1>

      {/* Alert */}
      {error && <AlertBox message={error} type="error" />}
      {success && <AlertBox message={success} type="success" />}

      {/* Form Tambah / Edit Artikel */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md space-y-4 max-w-2xl mx-auto"
      >
        <h2 className="text-xl font-semibold">
          {isEditing ? "Edit Artikel" : "Tambah Artikel Baru"}
        </h2>
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Judul Artikel"
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
          {isEditing ? "Update Artikel" : "Tambah Artikel"}
        </button>
      </form>

      {/* Loading */}
      {loading && <Loading />}

      {/* Error */}
      {!loading && error && <Error message={error} />}

      {/* Daftar Artikel */}
      {!loading && article.length === 0 && <EmptyState message="Belum ada artikel." />}

      {!loading && article.length > 0 && (
        <ArticleList
          products={article}
          onEdit={(product) => {
            setIsEditing(true);
            setEditingId(product.id);
            setForm(product);
          }}
          onDelete={async (id) => {
            try {
              await ArticleAPI.deleteArticle(id);
              fetchArticle();
            } catch (error) {
              console.error("Gagal menghapus artikel:", error);
            }
          }}
          loading={loading}
        />
      )}
    </div>
  );
}
