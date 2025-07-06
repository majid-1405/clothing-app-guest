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
    return <div>Memuat data produk...</div>;
  }

  const colorMap = {
    hitam: "bg-black",
    putih: "bg-white border",
    abu: "bg-gray-500",
    ungu: "bg-purple-500",
    biru: "bg-blue-500",
  };

  const sizeList = product.size?.split(",").map((s) => s.trim()) || [];
  const colorList = product.color?.split(",").map((c) => c.trim()) || [];

  return (
    <Dialog open={open} onClose={handleClose} className="relative z-10">
      <DialogBackdrop className="fixed inset-0 bg-gray-500/75" />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center px-4">
          <DialogPanel className="w-full max-w-3xl transform overflow-hidden rounded-lg bg-white p-6 text-left shadow-xl transition-all">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
            >
              <AiOutlineClose className="h-6 w-6" />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <img
                src={product.image}
                alt={product.name}
                className="rounded-lg object-cover"
              />
              <div>
                <h2 className="text-2xl font-bold">{product.name}</h2>
                <p className="text-xl text-gray-700 mt-2">
                  {Number(product.price).toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Stok: {product.stock}
                </p>

                <form className="mt-6">
                  <div>
                    <legend className="text-sm font-medium text-gray-900 mb-1">Warna</legend>
                    <div className="flex gap-3">
                      {colorList.map((color) => (
                        <span
                          key={color}
                          title={color}
                          className={classNames(
                            "w-8 h-8 rounded-full border",
                            colorMap[color.toLowerCase()] || "bg-gray-300"
                          )}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="mt-4">
                    <legend className="text-sm font-medium text-gray-900 mb-1">Ukuran</legend>
                    <RadioGroup
                      value={selectedSize}
                      onChange={setSelectedSize}
                      className="grid grid-cols-4 gap-2"
                    >
                      {sizeList.map((size) => (
                        <Radio
                          key={size}
                          value={size}
                          className={({ checked }) =>
                            classNames(
                              "text-sm text-center border rounded-md px-2 py-1 cursor-pointer",
                              checked ? "bg-indigo-600 text-white" : "hover:bg-gray-100"
                            )
                          }
                        >
                          {size}
                        </Radio>
                      ))}
                    </RadioGroup>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleAddToCart(product, selectedSize)}
                    className="mt-6 w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700"
                  >
                    Tambahkan ke Keranjang
                  </button>
                </form>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
