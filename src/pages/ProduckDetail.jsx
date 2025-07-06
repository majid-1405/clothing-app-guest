import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Radio,
  RadioGroup,
} from "@headlessui/react";
import { AiOutlineClose } from "react-icons/ai";
import { Product } from "../services/Product"; // service Supabase

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetail() {
  const [open, setOpen] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null); // pakai huruf kecil!
  const [selectedSize, setSelectedSize] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await Product.fetchById(id);
        if (data) {
          setProduct(data);
          const sizes = data.size?.split(",").map((s) => s.trim()) || [];
          setSelectedSize(sizes[0] || "");
        }
      } catch (error) {
        console.error("Gagal mengambil produk:", error);
        setProduct(null);
      }
    };

    fetchProduct();
  }, [id]);

  function handleClose() {
    setOpen(false);
    navigate(-1);
  }

  function handleAddToCart(product, size) {
    const keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];

    const existingIndex = keranjang.findIndex(
      (item) => item.id === product.id && item.selectedSize === size
    );

    if (existingIndex !== -1) {
      const existingItem = keranjang[existingIndex];
      if (existingItem.qty < product.stock) {
        keranjang[existingIndex].qty += 1;
        alert(`Jumlah produk "${product.name}" ditambah (Qty: ${keranjang[existingIndex].qty})`);
      } else {
        alert("Stok tidak mencukupi untuk menambah produk.");
      }
    } else {
      const produkBaru = {
        ...product,
        selectedSize: size,
        cartId: Date.now(),
        qty: 1,
      };
      keranjang.push(produkBaru);
      alert(`Produk "${product.name}" berhasil ditambahkan ke keranjang!`);
    }

    localStorage.setItem("keranjang", JSON.stringify(keranjang));
    handleClose();
  }

  if (!product) {
    return (
      <Dialog open={open} onClose={handleClose} className="relative z-10">
        <DialogBackdrop className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center px-4">
            <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-8 text-center shadow-2xl transition-all">
                                          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
              <p className="text-lg font-medium text-gray-900">Memuat data produk...</p>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    );
  }

  const colorMap = {
    hitam: "bg-black",
    putih: "bg-white border-2 border-gray-800",
    abu: "bg-gray-500",
    ungu: "bg-gray-600",
    biru: "bg-gray-700",
  };

  const sizeList = product.size?.split(",").map((s) => s.trim()) || [];
  const colorList = product.color?.split(",").map((c) => c.trim()) || [];

  return (
    <Dialog open={open} onClose={handleClose} className="relative z-10">
      <DialogBackdrop className="fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity" />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center px-4 py-8">
          <DialogPanel className="w-full max-w-4xl transform overflow-hidden rounded-3xl bg-white shadow-2xl transition-all">
            {/* Header */}
            <div className="relative bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 border-b border-gray-200">
              <h1 className="text-xl font-semibold text-gray-900">Detail Produk</h1>
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-200 rounded-full transition-all duration-200"
              >
                <AiOutlineClose className="h-5 w-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Image Section */}
                <div className="relative">
                  <div className="aspect-square overflow-hidden rounded-2xl bg-gray-100 shadow-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  {/* Image overlay badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg">
                    <span className="text-sm font-medium text-gray-900">
                      Stok: {product.stock}
                    </span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="flex flex-col">
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h2>
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-3xl font-bold text-gray-900">
                        {Number(product.price).toLocaleString("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        })}
                      </span>
                      <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Tersedia
                      </span>
                    </div>

                    <form className="space-y-6">
                      {/* Color Selection */}
                      <div className="bg-gray-50 rounded-2xl p-4">
                        <legend className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                          </svg>
                          Warna
                        </legend>
                        <div className="flex gap-3">
                          {colorList.map((color) => (
                            <div key={color} className="flex flex-col items-center">
                              <span
                                title={color}
                                className={classNames(
                                  "w-10 h-10 rounded-full border-2 shadow-md hover:shadow-lg transition-shadow cursor-pointer",
                                  colorMap[color.toLowerCase()] || "bg-gray-300"
                                )}
                              />
                              <span className="text-xs text-gray-600 mt-1 capitalize">{color}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Size Selection */}
                      <div className="bg-gray-50 rounded-2xl p-4">
                        <legend className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                          </svg>
                          Ukuran
                        </legend>
                        <RadioGroup
                          value={selectedSize}
                          onChange={setSelectedSize}
                          className="grid grid-cols-4 gap-3"
                        >
                          {sizeList.map((size) => (
                            <Radio
                              key={size}
                              value={size}
                              className={({ checked }) =>
                                classNames(
                                  "text-sm font-medium text-center border-2 rounded-xl px-4 py-3 cursor-pointer transition-all duration-200",
                                  checked 
                                    ? "bg-gray-900 text-white border-gray-900 shadow-lg transform scale-105" 
                                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-gray-400"
                                )
                              }
                            >
                              {size}
                            </Radio>
                          ))}
                        </RadioGroup>
                      </div>
                    </form>
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    type="button"
                    onClick={() => handleAddToCart(product, selectedSize)}
                    className="w-full bg-gradient-to-r from-gray-800 to-gray-900 text-white py-4 rounded-2xl font-semibold text-lg hover:from-gray-900 hover:to-black transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                    </svg>
                    Tambahkan ke Keranjang
                  </button>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}