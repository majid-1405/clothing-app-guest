import { useEffect, useState } from "react";
import { MediaAPI } from "../services/MediaAPI";
import Loading from "../components/Loading";
import Error from "../components/Error";

export default function MediaPage() {
  const [photos, setPhotos] = useState([]);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchMedia = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await MediaAPI.fetchMedia();
      setPhotos(data.filter((item) => item.gambar));
      setVideos(data.filter((item) => item.link));
    } catch (err) {
      setError("Gagal mengambil data media");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMedia();
  }, []);

  return (
    <div className="w-full px-6 bg-white min-h-screen py-20">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Katalog Media</h1>
        <p className="text-gray-600">Jelajahi galeri video & foto dari koleksi dan aktivitas kami.</p>
      </div>

      {loading && <Loading />}
      {error && <Error message={error} />}

      {/* FOTO GALERI */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-left">Galeri Foto</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <div key={photo.id} className="rounded-xl overflow-hidden shadow-md">
              <img src={photo.gambar} alt={photo.judul} className="w-full h-64 object-cover" />
              <div className="p-4 bg-gray-50">
                <p className="text-lg font-medium">{photo.judul}</p>
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
                  src={video.link}
                  title={video.judul}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4 bg-gray-50">
                <p className="text-lg font-medium">{video.judul}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
