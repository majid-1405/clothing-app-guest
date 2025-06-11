import { useState } from "react";

export default function PreOrderPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Kirim data booking ke server atau tampilkan alert
    alert("Booking berhasil dikirim!");
    console.log(formData);
  };

  return (
    <div className="w-full min-h-screen px-6 py-12 bg-gray-50 flex justify-center items-center">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-2xl p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Booking Sesi Fashion</h1>
        <p className="text-gray-600 text-center mb-8">
          Isi formulir di bawah ini untuk menjadwalkan sesi styling atau fitting bersama kami.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-medium text-gray-700">Nama Lengkap</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-black"
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
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-black"
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
            className="w-full bg-black text-white py-3 rounded-full font-semibold hover:bg-gray-800 transition"
          >
            Kirim Booking
          </button>
        </form>
      </div>
    </div>
  );
}
