import { useEffect, useState } from "react";
import { MediaAPI } from "../services/MediaAPI";
import Loading from "../components/Loading";
import Error from "../components/Error";
import AlertBox from "../components/AlertBox";

export default function MediaPage() {
  const [photos, setPhotos] = useState([]);
  const [videos, setVideos] = useState([]);
  const [form, setForm] = useState({
    title: "",
    url: "",
    type: "photo",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const fetchMedia = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await MediaAPI.fetchMedia();
      setPhotos(data.filter((item) => item.type === "photo"));
      setVideos(data.filter((item) => item.type === "video"));
    } catch (err) {
      setError("Gagal mengambil data media");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMedia();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      await MediaAPI.addMedia(form);
      setSuccess("Media berhasil ditambahkan!");
      setForm({ title: "", url: "", type: "photo" });
      fetchMedia();
    } catch (err) {
      setError("Gagal menambahkan media.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full px-6 py-12 bg-white min-h-screen py-20">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Katalog Media</h1>
        <p className="text-gray-600">Jelajahi galeri video & foto dari koleksi dan aktivitas kami.</p>
      </div>

      {/* FORM TAMBAH MEDIA */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md space-y-4 max-w-2xl mx-auto mb-12"
      >
        <h2 className="text-xl font-semibold">Tambah Media Baru</h2>
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Judul Media"
          className="w-full border rounded p-2"
          required
        />
        <input
          name="url"
          value={form.url}
          onChange={handleChange}
          placeholder="URL Media (Gambar atau Video YouTube)"
          className="w-full border rounded p-2"
          required
        />
        <select
          name="type"
          value={form.type}
          onChange={handleChange}
          className="w-full border rounded p-2"
        >
          <option value="photo">Foto</option>
          <option value="video">Video</option>
        </select>
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition"
        >
          Tambah Media
        </button>
        {loading && <Loading />}
        {error && <Error message={error} />}
        {success && <AlertBox message={success} />}
      </form>

      {/* FOTO GALERI */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-left">Galeri Foto</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <div key={photo.id} className="rounded-xl overflow-hidden shadow-md">
              <img src={photo.url} alt={photo.title} className="w-full h-64 object-cover" />
              <div className="p-4 bg-gray-50">
                <p className="text-lg font-medium">{photo.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* VIDEO GALERI */}
      <div>
        <h2 className="text-2xl font-semibold mb-6 text-left">Galeri Video</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videos.map((video) => (
            <div key={video.id} className="rounded-xl overflow-hidden shadow-md">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  className="w-full h-full"
                  src={video.url}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4 bg-gray-50">
                <p className="text-lg font-medium">{video.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
