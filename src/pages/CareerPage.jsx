import { useEffect, useState } from "react";
import { CareerAPI } from "../services/CareerAPI";
import Loading from "../components/Loading";
import Error from "../components/Error";
import EmptyState from "../components/EmptyState";

export default function CareerPage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchJobs = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await CareerAPI.fetchJobs();
      setJobs(data);
    } catch (err) {
      setError("Gagal mengambil data lowongan");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-24">
      <h1 className="text-3xl font-bold text-center mb-10 font-integral">
        Career Opportunities
      </h1>

      {error && <Error message={error} />}
      {loading && <Loading />}
      {!loading && jobs.length === 0 && (
        <EmptyState message="Belum ada lowongan tersedia." />
      )}

      <div className="space-y-6">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-white p-6 rounded-lg shadow border border-gray-200"
          >
            {/* Gambar jika ada */}
            {job.gambar && (
              <img
                src={job.gambar}
                alt={job.posisi}
                className="w-full h-48 object-cover rounded mb-4"
              />
            )}

            <h2 className="text-xl font-semibold text-gray-900">{job.posisi}</h2>
            <p className="text-gray-600 mb-1">{job.tipe}</p>
            <p className="text-gray-700 mt-2">{job.deskripsi}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
