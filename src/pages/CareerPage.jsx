import { useEffect, useState } from "react";
import { CareerAPI } from "../services/CareerAPI";
import Loading from "../components/Loading";
import Error from "../components/Error";
import EmptyState from "../components/EmptyState";
import AlertBox from "../components/AlertBox";

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
  const [success, setSuccess] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

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
        await CareerAPI.updateJob(editingId, form);
        setSuccess("Lowongan berhasil diperbarui");
      } else {
        await CareerAPI.addJob(form);
        setSuccess("Lowongan berhasil ditambahkan");
      }

      // Reset form dan status
      setForm({ title: "", location: "", type: "", description: "" });
      setIsEditing(false);
      setEditingId(null);

      setTimeout(() => setSuccess(""), 3000);

      fetchJobs();
    } catch (err) {
      setError(`Terjadi kesalahan: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      setError("");
      await CareerAPI.deleteJob(id);
      setSuccess("Lowongan berhasil dihapus");
      setTimeout(() => setSuccess(""), 3000);
      fetchJobs();
    } catch (err) {
      setError("Gagal menghapus lowongan");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (job) => {
    setForm({
      title: job.title,
      location: job.location,
      type: job.type,
      description: job.description
    });
    setIsEditing(true);
    setEditingId(job.id);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Career Opportunities</h1>

      {error && <Error message={error} />}
      {success && <AlertBox type="success" message={success} />}
      {loading && <Loading />}

      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow mb-10">
        <input name="title" value={form.title} onChange={handleChange} placeholder="Job Title" className="w-full p-2 border rounded" required />
        <input name="location" value={form.location} onChange={handleChange} placeholder="Location" className="w-full p-2 border rounded" required />
        <input name="type" value={form.type} onChange={handleChange} placeholder="Job Type (Full-Time, etc)" className="w-full p-2 border rounded" required />
        <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" className="w-full p-2 border rounded" required />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          {isEditing ? "Update Job" : "Add Job"}
        </button>
      </form>

      <div>
        {!loading && jobs.length === 0 && <EmptyState message="Belum ada lowongan tersedia." />}

        {!loading && jobs.map((job) => (
          <div key={job.id} className="bg-white p-4 rounded shadow mb-4">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold">{job.title}</h2>
                <p className="text-gray-600">{job.location} • {job.type}</p>
                <p className="text-gray-700 mt-2">{job.description}</p>
              </div>
              <div className="flex gap-3">
                <button onClick={() => handleEdit(job)} className="text-blue-600">Edit</button>
                <button onClick={() => handleDelete(job.id)} className="text-red-500">Hapus</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
