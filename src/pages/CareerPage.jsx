import React from 'react';

const careers = [
  {
    id: 1,
    position: "Graphic Designer",
    location: "Jakarta, Indonesia",
    type: "Full Time",
    description:
      "Membuat konten visual kreatif untuk promosi produk fashion kami.",
  },
  {
    id: 2,
    position: "Fashion Copywriter",
    location: "Bandung, Indonesia",
    type: "Remote",
    description:
      "Menulis deskripsi produk dan konten promosi yang menarik dan branding-friendly.",
  },
  {
    id: 3,
    position: "Social Media Specialist",
    location: "Yogyakarta, Indonesia",
    type: "Part Time",
    description:
      "Meningkatkan visibilitas merek di media sosial dengan strategi konten.",
  },
];

import { useEffect, useState } from "react";
import { CareerAPI } from "../services/CareerAPI";
import Loading from "../components/Loading";
import Error from "../components/Error";
import EmptyState from "../components/EmptyState";

export default function CareerPage() {
  const [jobs, setJobs] = useState([]);
  const [form, setForm] = useState({
    title: "",
    location: "",
    type: "",
    description: ""
  });
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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await CareerAPI.createJob(form);
      setForm({ title: "", location: "", type: "", description: "" });
      fetchJobs();
    } catch {
      setError("Gagal menambahkan lowongan");
    }
  };

  const handleDelete = async (id) => {
    try {
      await CareerAPI.deleteJob(id);
      fetchJobs();
    } catch {
      setError("Gagal menghapus lowongan");
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Career Opportunities</h1>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
        <input name="title" value={form.title} onChange={handleChange} placeholder="Job Title" className="w-full p-2 border rounded" />
        <input name="location" value={form.location} onChange={handleChange} placeholder="Location" className="w-full p-2 border rounded" />
        <input name="type" value={form.type} onChange={handleChange} placeholder="Job Type (Full-Time, etc)" className="w-full p-2 border rounded" />
        <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" className="w-full p-2 border rounded" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Add Job</button>
      </form>

      <div className="mt-10">
        {loading && <Loading />}
        {error && <Error message={error} />}
        {!loading && jobs.length === 0 && <EmptyState message="Belum ada lowongan tersedia." />}

        {!loading && jobs.map((job) => (
          <div key={job.id} className="bg-white p-4 rounded shadow mb-4">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold">{job.title}</h2>
                <p className="text-gray-600">{job.location} • {job.type}</p>
                <p className="text-gray-700 mt-2">{job.description}</p>
              </div>
              <button onClick={() => handleDelete(job.id)} className="text-red-500">Hapus</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
