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
      await PreOrderAPI.addPreOrder({
        name: formData.name,
        email: formData.email,
        date: formData.date,
        notes: formData.notes,
      });

      setSuccess("Pesanan berhasil dikirim!");
      setFormData({ name: "", email: "", date: "", notes: "" });
      setIsOpen(false);
    } catch (err) {
      setError("Gagal menyimpan data: " + (err.response?.data?.message || err.message));
    }
  };

  return (
    <div className="p-15 py-30">
      <h1 className="text-2xl font-bold mb-6">Pre Order</h1>

      {/* Carousel Wrapper */}
      <div className="carousel w-full space-x-4">
        {productData.slice(0, 5).map((product, index) => (
          <div key={product.id} className="carousel-item w-64">
            <div className="card w-full bg-base-100 shadow-md">
              <figure>
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-40 w-full object-cover"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{product.name}</h2>
                <p>
                  {product.price.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => openModal(product)}
                >
                  Pre Order
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal DaisyUI */}
      {isOpen && (
        <dialog id="preorder_modal" className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Pre Order: {selected?.name}</h3>

            <form onSubmit={handleSubmit} className="space-y-3 mt-4">
              <input
                type="text"
                name="name"
                placeholder="Nama"
                className="input input-bordered w-full"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered w-full"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="date"
                name="date"
                className="input input-bordered w-full"
                value={formData.date}
                onChange={handleChange}
                required
              />
              <textarea
                name="notes"
                placeholder="Catatan"
                className="textarea textarea-bordered w-full"
                value={formData.notes}
                onChange={handleChange}
              ></textarea>

              <div className="modal-action">
                <button
                  type="button"
                  className="btn"
                  onClick={() => setIsOpen(false)}
                >
                  Batal
                </button>
                <button type="submit" className="btn btn-primary">
                  Kirim
                </button>
              </div>
            </form>
            {success && <p className="text-green-500 mt-2">{success}</p>}
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </div>
        </dialog>
      )}
    </div>
  );
}
