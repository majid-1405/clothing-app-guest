import { useState, useEffect, useRef } from "react";
import { 
  X, 
  ShoppingCart, 
  Plus, 
  Minus, 
  Trash2, 
  CreditCard,
  MapPin,
  User,
  ArrowLeft,
  Check
} from "lucide-react";
import { CheckoutAPI } from "../services/CheckoutAPI";


export default function KeranjangPage() {
  const [open, setOpen] = useState(true);
  const [products, setProducts] = useState([]);
  const [checkoutData, setCheckoutData] = useState({
    nama: "",
    alamat: "",
    metode: "",
  });
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const checkoutSectionRef = useRef(null);

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => {
      // navigate(-1);
    }, 300);
  };

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("keranjang")) || [];
    setProducts(savedCart);
  }, []);

  const updateCart = (updated) => {
    setProducts(updated);
    localStorage.setItem("keranjang", JSON.stringify(updated));
  };

  const handleRemove = (cartId) => {
    const updated = products.filter((item) => item.cartId !== cartId);
    updateCart(updated);
  };

  const handleQtyChange = (cartId, delta) => {
    const updated = products.map((item) => {
      if (item.cartId === cartId) {
        const newQty = item.qty + delta;
        if (newQty <= 0) return item;
        if (newQty > item.stock) {
          alert("Jumlah melebihi stok yang tersedia!");
          return item;
        }
        return { ...item, qty: newQty };
      }
      return item;
    });
    updateCart(updated);
  };

  const subtotal = products.reduce((total, item) => total + item.price * item.qty, 0);
  const serviceFee = subtotal * 0.1;
  const totalHarga = subtotal + serviceFee;

 const handleCheckoutSubmit = async () => {
  if (!checkoutData.metode) {
    alert("Silakan pilih metode pembayaran.");
    return;
  }

  setIsSubmitting(true);

  try {
    const orderPayload = {
      nama: checkoutData.nama,
      alamat: checkoutData.alamat,
      metode: checkoutData.metode,
      total: totalHarga,
      item: products.map((item) => ({
        id: item.id,
        name: item.name,
        qty: item.qty,
        size: item.selectedSize,
        price: item.price,
      })),
    };

    await CheckoutAPI.saveOrder(orderPayload);

    alert("✅ Checkout berhasil disimpan ke Supabase!");

    localStorage.removeItem("keranjang");
    setProducts([]);
    setShowCheckoutForm(false);
  } catch (err) {
    alert("❌ Gagal menyimpan pesanan: " + err.message);
  }

  setIsSubmitting(false);
};


  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={handleClose} />

      <div className="relative w-full max-w-6xl mx-4 max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
        {/* Cart Section */}
        <div className="flex-1 p-6 overflow-y-auto border-r border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <ShoppingCart className="w-6 h-6" />
              <h2 className="text-xl font-bold">Keranjang Belanja</h2>
              {products.length > 0 && (
                <span className="bg-black text-white px-2 py-1 rounded-full text-sm font-medium">
                  {products.length} item{products.length > 1 ? 's' : ''}
                </span>
              )}
            </div>
            <button
              onClick={handleClose}
              className="p-2 hover:bg-gray-200 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {products.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingCart className="w-16 h-16 mx-auto text-gray-300 mb-4" />
              <p className="text-xl text-gray-500 mb-2">Keranjang Anda kosong</p>
              <p className="text-gray-400">Silakan tambahkan produk ke keranjang</p>
            </div>
          ) : (
            <div className="space-y-4">
              {products.map((product) => (
                <div
                  key={product.cartId}
                  className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-20 object-cover rounded-lg shadow-md"
                  />

                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">{product.name}</h3>
                    <p className="text-sm text-gray-500 mb-1">
                      Ukuran: <span className="font-medium">{product.selectedSize}</span>
                    </p>
                    <p className="text-sm text-gray-500 mb-3">
                      Stok: <span className="font-medium">{product.stock}</span>
                    </p>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleQtyChange(product.cartId, -1)}
                        className="p-1 rounded-full border-2 border-gray-400 hover:border-black hover:bg-gray-100 transition-colors"
                        disabled={product.qty <= 1}
                      >
                        <Minus className="w-4 h-4 text-gray-800" />
                      </button>
                      <span className="w-8 text-center font-semibold text-gray-900">{product.qty}</span>
                      <button
                        onClick={() => handleQtyChange(product.cartId, 1)}
                        className="p-1 rounded-full border-2 border-gray-400 hover:border-black hover:bg-gray-100 transition-colors"
                        disabled={product.qty >= product.stock}
                      >
                        <Plus className="w-4 h-4 text-gray-800" />
                      </button>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="font-bold text-lg text-gray-900 mb-2">
                      {(product.price * product.qty).toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </p>
                    <button
                      onClick={() => handleRemove(product.cartId)}
                      className="flex items-center gap-1 text-gray-700 hover:text-black hover:bg-gray-100 px-2 py-1 rounded transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                      <span className="text-sm">Hapus</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Checkout Section */}
        <div ref={checkoutSectionRef} className="w-full lg:w-[420px] bg-gray-50 p-6 overflow-y-auto">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Ringkasan Pesanan</h3>

          <div className="space-y-3 mb-6">
            <div className="flex justify-between text-gray-700">
              <span>Subtotal</span>
              <span className="font-medium">
                {subtotal.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })}
              </span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>Biaya Layanan (10%)</span>
              <span className="font-medium">
                {serviceFee.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })}
              </span>
            </div>
            <div className="flex justify-between text-lg font-bold text-gray-900 pt-3 border-t border-gray-300">
              <span>Total</span>
              <span>
                {totalHarga.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })}
              </span>
            </div>
          </div>

          {showCheckoutForm ? (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="w-4 h-4 inline mr-2" />
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  placeholder="Masukkan nama lengkap"
                  value={checkoutData.nama}
                  onChange={(e) =>
                    setCheckoutData({ ...checkoutData, nama: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:ring-2 focus:ring-black focus:border-black"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <MapPin className="w-4 h-4 inline mr-2" />
                  Alamat Lengkap
                </label>
                <textarea
                  placeholder="Masukkan alamat lengkap"
                  value={checkoutData.alamat}
                  onChange={(e) =>
                    setCheckoutData({ ...checkoutData, alamat: e.target.value })
                  }
                  required
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:ring-2 focus:ring-black focus:border-black"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <CreditCard className="w-4 h-4 inline mr-2" />
                  Metode Pembayaran
                </label>
                <select
                  value={checkoutData.metode}
                  onChange={(e) =>
                    setCheckoutData({ ...checkoutData, metode: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:ring-2 focus:ring-black focus:border-black"
                >
                  <option value="">Pilih Metode Pembayaran</option>
                  <option value="transfer">Transfer Bank</option>
                  <option value="cod">COD (Bayar di Tempat)</option>
                  <option value="ewallet">E-Wallet</option>
                </select>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowCheckoutForm(false)}
                  className="flex-1 px-4 py-3 border border-gray-400 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 inline mr-2" />
                  Kembali
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  onClick={handleCheckoutSubmit}
                  className="flex-1 px-4 py-3 bg-black text-white rounded-lg hover:bg-gray-800 disabled:bg-gray-400 transition-colors font-medium"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin inline mr-2"></div>
                      Memproses...
                    </>
                  ) : (
                    <>
                      <Check className="w-4 h-4 inline mr-2" />
                      Check Out
                    </>
                  )}
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <button
                onClick={() => {
                  setShowCheckoutForm(true);
                  setTimeout(() => {
                    checkoutSectionRef.current?.scrollIntoView({ 
                      behavior: 'smooth', 
                      block: 'nearest' 
                    });
                  }, 100);
                }}
                disabled={products.length === 0}
                className="w-full px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 disabled:bg-gray-400 transition-all font-medium shadow-lg"
              >
                <CreditCard className="w-5 h-5 inline mr-2" />
                Checkout Sekarang
              </button>
              <button
                onClick={handleClose}
                className="w-full px-6 py-2 text-gray-700 hover:text-black hover:bg-gray-100 rounded-lg transition-colors font-medium"
              >
                Lanjut Belanja →
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
