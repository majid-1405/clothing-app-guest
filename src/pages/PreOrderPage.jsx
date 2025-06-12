import { useState, useEffect } from "react";
import { PreOrderAPI } from "../services/PreOrderAPI";

export default function PreOrderPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    notes: "",
  });

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const fetchPreOrders = async () => {
    try {
      const data = await PreOrderAPI.fetchPreOrders();
      setOrders(data);
    } catch (err) {
      console.error("Gagal fetch data:", err.message);
    }
  };

  useEffect(() => {
    fetchPreOrders();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      await PreOrderAPI.addPreOrder(formData);
      setSuccess("Booking berhasil dikirim!");
      fetchPreOrders(); // Refresh list

      setFormData({
        name: "",
        email: "",
        date: "",
        time: "",
        notes: "",
      });

      setTimeout(() => setSuccess(""), 3000);
    } catch (err) {
      setError("Gagal mengirim booking");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen px-6 py-12 bg-gray-50 flex justify-center items-start">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-2xl p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Booking Sesi Fashion</h1>
        <p className="text-gray-600 text-center mb-8">
          Isi formulir di bawah ini untuk menjadwalkan sesi styling atau fitting bersama kami.
        </p>

        {success && <div className="text-green-600 mb-4">{success}</div>}
        {error && <div className="text-red-600 mb-4">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-medium text-gray-700">Nama Lengkap</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:gap-4">
            <div className="flex-1">
              <label className="block font-medium text-gray-700">Tanggal</label>
              <input
                type="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>

            <div className="flex-1">
              <label className="block font-medium text-gray-700">Waktu</label>
              <input
                type="time"
                name="time"
                required
                value={formData.time}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>

          <div>
            <label className="block font-medium text-gray-700">Catatan Tambahan</label>
            <textarea
              name="notes"
              rows="4"
              value={formData.notes}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Tulis permintaan khusus (opsional)..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-3 rounded-full font-semibold hover:bg-gray-800 transition"
          >
            {loading ? "Mengirim..." : "Kirim Booking"}
          </button>
        </form>

        {/* Daftar Booking */}
        {orders.length > 0 && (
          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-4">Daftar Booking</h2>
            <ul className="space-y-4">
              {orders.map((order) => (
                <li
                  key={order.id}
                  className="p-4 bg-gray-100 rounded-lg border"
                >
                  <p><strong>Nama:</strong> {order.name}</p>
                  <p><strong>Email:</strong> {order.email}</p>
                  <p><strong>Tanggal:</strong> {order.date}</p>
                  <p><strong>Waktu:</strong> {order.time}</p>
                  {order.notes && <p><strong>Catatan:</strong> {order.notes}</p>}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
